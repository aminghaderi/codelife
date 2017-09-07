import axios from "axios";
import React, {Component} from "react";
import {connect} from "react-redux";
import {translate} from "react-i18next";
import {Tree, Popover, Position, Menu, MenuItem, MenuDivider, Button} from "@blueprintjs/core";
import Loading from "components/Loading";
import IslandEditor from "pages/lessonbuilder/IslandEditor";
import LevelEditor from "pages/lessonbuilder/LevelEditor";
import SlideEditor from "pages/lessonbuilder/SlideEditor";
import CtxMenu from "pages/lessonbuilder/CtxMenu";

import "./LessonBuilder.css";

class LessonBuilder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      nodes: null,
      currentNode: null
    };
  }

  componentDidMount() {
    const lget = axios.get("/api/lessons");
    const mlget = axios.get("/api/minilessons/all");
    const sget = axios.get("/api/slides/all");
    Promise.all([lget, mlget, sget]).then(resp => {
      const lessons = resp[0].data;
      const minilessons = resp[1].data;
      const slides = resp[2].data;
      lessons.sort((a, b) => a.ordering - b.ordering);
      minilessons.sort((a, b) => a.ordering - b.ordering);
      slides.sort((a, b) => a.ordering - b.ordering);      
      minilessons.map(m => m.slides = []);
      lessons.map(l => l.minilessons = []);

      const nodes = [];

      for (let l of lessons) {
        l = this.fixNulls(l);
        nodes.push({
          id: l.id,
          hasCaret: true, 
          iconName: "map", 
          label: l.name,
          itemType: "island",
          parent: {childNodes: nodes},
          childNodes: [],
          data: l
        });
      }
      for (let m of minilessons) {
        m = this.fixNulls(m);
        const lessonNode = nodes.find(node => node.data.id === m.lid);
        if (lessonNode) {
          lessonNode.childNodes.push({
            id: m.id,
            hasCaret: true, 
            iconName: "multi-select", 
            label: m.name,
            itemType: "level",
            parent: lessonNode,
            childNodes: [],
            data: m
          });
        }
      }
      for (let s of slides) {
        s = this.fixNulls(s);
        let levelNode = null;
        for (const lessonNode of nodes) {
          levelNode = lessonNode.childNodes.find(cn => cn.data.id === s.mlid);
          if (levelNode) break;
        }
        if (levelNode) {
          levelNode.childNodes.push({
            id: s.id,
            hasCaret: false, 
            iconName: "page-layout", 
            label: s.title,
            itemType: "slide",
            parent: levelNode,
            data: s
          });
        }
      }
      this.setState({mounted: true, nodes});
    });
  }

  fixNulls(obj) {
    for (const k in obj) {
      if (obj.hasOwnProperty(k) && (obj[k] === undefined || obj[k] === null)) {
        obj[k] = "";
      }
    }
    return obj;
  }

  moveItem(n, dir) {
    const {nodes} = this.state;
    const arr = n.parent.childNodes;
    if (dir === "up") {
      const old = arr.find(node => node.data.ordering === n.data.ordering - 1);
      old.data.ordering++;
      n.data.ordering--;
    }
    if (dir === "down") {
      const old = arr.find(node => node.data.ordering === n.data.ordering + 1);
      old.data.ordering--;
      n.data.ordering++;
    }
    arr.sort((a, b) => a.data.ordering - b.data.ordering);  
    this.setState({nodes}); 
  }

  addItem(n, dir) {
    console.log(n, dir);
  }

  deleteItem(n) {
    console.log(n);
  }

  handleNodeClick(node) {
    const {currentNode} = this.state;
    if (!currentNode) {
      node.isSelected = true;
      node.secondaryLabel = <CtxMenu node={node} moveItem={this.moveItem.bind(this)} addItem={this.addItem.bind(this)} deleteItem={this.deleteItem.bind(this)} />;
    }
    else if (node.id !== currentNode.id) {
      node.isSelected = true;
      currentNode.isSelected = false;
      node.secondaryLabel = <CtxMenu node={node} moveItem={this.moveItem.bind(this)} addItem={this.addItem.bind(this)} deleteItem={this.deleteItem.bind(this)} />;
      currentNode.secondaryLabel = null;
    }
    this.setState({currentNode: node});
  }

  handleNodeCollapse(node) {
    node.isExpanded = false;
    this.setState({nodes: this.state.nodes});
  }

  handleNodeExpand(node) {
    node.isExpanded = true;
    this.setState({nodes: this.state.nodes});
  }

  reportChange() {}

  render() {

    const {nodes, currentNode} = this.state;

    if (!nodes) return <Loading />;
    
    return (
      <div id="lesson-builder">
        <div id="tree">
          <Tree
            onNodeClick={this.handleNodeClick.bind(this)}
            onNodeCollapse={this.handleNodeCollapse.bind(this)}
            onNodeExpand={this.handleNodeExpand.bind(this)}
            contents={nodes}
          />
        </div>
        { currentNode 
          ? <div id="item-editor">
              {currentNode.itemType === "island" ? <IslandEditor data={currentNode.data} reportChange={this.reportChange.bind(this)} /> : null}
              {currentNode.itemType === "level" ? <LevelEditor data={currentNode.data} reportChange={this.reportChange.bind(this)}/> : null }
              {currentNode.itemType === "slide" ? <SlideEditor data={currentNode.data} reportChange={this.reportChange.bind(this)}/> : null }
            </div>
          : null 
        }
      </div>
    );
  }
}

LessonBuilder = connect(state => ({
  auth: state.auth
}))(LessonBuilder);
LessonBuilder = translate()(LessonBuilder);
export default LessonBuilder;
