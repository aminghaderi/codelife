import axios from "axios";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import Nav from "components/Nav";
import React, {Component} from "react";
import {translate} from "react-i18next";

import ImageText from "components/slidetypes/ImageText";
import InputCode from "components/slidetypes/InputCode";
import Quiz from "components/slidetypes/Quiz";
import TextCode from "components/slidetypes/TextCode";
import TextImage from "components/slidetypes/TextImage";
import TextText from "components/slidetypes/TextText";
import RenderCode from "components/slidetypes/RenderCode";

import "./Slide.css";

const compLookup = {TextImage, ImageText, TextText, TextCode, InputCode, RenderCode, Quiz};

class Slide extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      currentSlide: null,
      blocked: true,
      currentLesson: null,
      minilessons: null,
      sentProgress: false
    };
  }

  unblock() {
    this.setState({blocked: false});
  }

  isLastMinilesson() {
    const {minilessons} = this.state;
    const {mlid} = this.props.params;
    if (minilessons) {
      const sorted = minilessons.sort((a, b) => b.ordering - a.ordering);
      return sorted[0].id === mlid;
    }
    return false;
  }

  saveProgress(uid, level) {
    axios.get(`/api/userprogress?uid=${uid}&level=${level}`).then (resp => {
      if (resp.status === 200) {
        if (resp.data.length === 0) {
          axios.post("/api/userprogress/save", {uid, level}).then (resp => {
            resp.status === 200 ? console.log("posted progress") : console.log("error");
          });
        }
        else {
          console.log("level already beaten, not changing anything");
        }
      }
      else {
        console.log("failed to find progress");
      }
    });
  }

  componentDidUpdate() {
    const {lid, mlid, sid} = this.props.params;
    const {user} = this.props;
    const {currentSlide, slides, sentProgress} = this.state;

    if (currentSlide && currentSlide.id !== sid) {
      const cs = slides.find(slide => slide.id === sid);
      const blocked = ["InputCode", "Quiz"].indexOf(cs.type) !== -1;
      this.setState({currentSlide: cs, blocked});
    }

    const isFinalSlide = slides && currentSlide && slides.indexOf(currentSlide) === slides.length - 1;
    if (user && isFinalSlide && !sentProgress) {
      this.setState({sentProgress: true});
      this.saveProgress(user.id, mlid);
      if (this.isLastMinilesson()) this.saveProgress(user.id, lid);
    }
  }

  componentDidMount() {
    const {lid, mlid} = this.props.params;
    let {sid} = this.props.params;
    
    axios.get(`/api/slides?mlid=${mlid}`).then(resp => {
      const slideList = resp.data;
      slideList.sort((a, b) => a.ordering - b.ordering);
      if (sid === undefined) {
        sid = slideList[0].id;
        browserHistory.push(`/lesson/${lid}/${mlid}/${sid}`);
      }
      const cs = slideList.find(slide => slide.id === sid);
      const blocked = ["InputCode", "Quiz"].indexOf(cs.type) !== -1;
      this.setState({currentSlide: cs, slides: slideList, blocked});
    });

    axios.get(`/api/lessons?id=${lid}`).then(resp => {
      this.setState({currentLesson: resp.data[0]});
    });

    axios.get(`/api/minilessons?lid=${lid}`).then(resp => {
      this.setState({minilessons: resp.data});
    });

  }

  render() {
    
    const {t} = this.props;
    const {lid, mlid} = this.props.params;
    const {currentSlide, slides, currentLesson} = this.state;

    const i = slides.indexOf(currentSlide);
    const prevSlug = i > 0 ? slides[i - 1].id : null;
    const nextSlug = i < slides.length - 1 ? slides[i + 1].id : null;

    let SlideComponent = null;

    if (!currentSlide || !currentLesson) return <h1>Loading...</h1>;
    
    SlideComponent = compLookup[currentSlide.type];
    
    return (
      <div> 
        <h1>{currentSlide.title}</h1>

        <SlideComponent unblock={this.unblock.bind(this)} {...currentSlide} />

        <div id="slugcontainer"> 
          { prevSlug ? <Link className="navlink" to={`/lesson/${lid}/${mlid}/${prevSlug}`}>previous</Link> : <span className="deadlink">previous</span> }
          { nextSlug && !this.state.blocked ? <Link className="navlink" to={`/lesson/${lid}/${mlid}/${nextSlug}`}>next</Link> : <span className="deadlink">next</span> }  
        </div>
        <div id="returncontainer">
          
          { !nextSlug ? <Link className="editor-link" to={`/editor/${lid}`}>Try it out in my editor!</Link> : null }
          <br/><br/>
          <Link className="link" to={`/lesson/${lid}`}>return to {currentLesson.name}</Link>
        </div>
        <Nav />
      </div>
    );
  }
}

Slide = connect(state => ({
  user: state.auth.user
}))(Slide);
Slide = translate()(Slide);
export default Slide;

