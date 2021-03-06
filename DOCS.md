## Classes

<dl>
<dt><a href="#AuthForm">AuthForm</a></dt>
<dd><p>AuthForm is a wrapper component that switches between LoginForm and Signup Form
It can be primed with a default via the initialMode prop.</p>
</dd>
<dt><a href="#Browser">Browser</a></dt>
<dd><p>Browser is a drop-down menu embedded in Nav that lets the user jump to any
level or island that they have beaten in the past</p>
</dd>
<dt><a href="#Checkpoint">Checkpoint</a></dt>
<dd><p>Checkpoint is a one-time pop-up that asks the user to fill in his or her school/location
Originally intended to be a more generic &quot;Checkpoint&quot; system that would support arbitrary 
banners/messages, it is currently only used for gathering school info</p>
</dd>
<dt><a href="#CodeBlockCard">CodeBlockCard</a></dt>
<dd><p>CodeBlockCards appear throughout the site as a way of previewing a student&#39;s codeblock
It contains both the small clickable card with preview image AND the dialog box that pops
up over the page and shows the full screen code editor.</p>
</dd>
<dt><a href="#CodeBlockEditor">CodeBlockEditor</a></dt>
<dd><p>CodeBlockEditor is the popover that comes up for the final test of an island.
It is mostly a wrapper around CodeEditor that provides the student with the test prompt,
cheat sheet, and db routes to save their progress when they pass the test</p>
</dd>
<dt><a href="#CodeBlockList">CodeBlockList</a></dt>
<dd><p>CodeBlockList is used by Projects to display codeblocks to draw inspiration from.</p>
</dd>
<dt><a href="#CodeEditor">CodeEditor</a></dt>
<dd><p>CodeEditor is a two-panel rendering component for student code.
It uses AceEditor for the student panel (left), and a remote rendering iframe for the page preview (right).</p>
</dd>
<dt><a href="#DrawerValidation">DrawerValidation</a></dt>
<dd><p>The CodeEditor is responsible for handling violation of the rules set out for a given
programming challenge. A list of errors is passed in as a prop - this component is 
responsible for creating a readable sentence form of what is wrong with the student&#39;s code.
For example, &quot;Your HTML code is missing an <h1> tag&quot;. The format of this language is stored in
the database as &quot;Your {{p1}} is missing {{p2}}.&quot; (Note that this need be translated by lang)</p>
</dd>
<dt><a href="#CollabList">CollabList</a></dt>
<dd><p>Provides a list of Collaborators for a project provided by props.</p>
</dd>
<dt><a href="#CollabSearch">CollabSearch</a></dt>
<dd><p>Popover window so that project owners can find and add new users to collaborate on a given project</p>
</dd>
<dt><a href="#Comment">Comment</a></dt>
<dd><p>Comments belong to Threads. Note that there is no text editor here - all posting is handled by Thread.jsx.
This component is for displaying only.</p>
</dd>
<dt><a href="#ContestSignup">ContestSignup</a></dt>
<dd><p>Signup page for (currently postponed) project contest. Signing up simply enters the user in the contest,
users still must go to the ContestSubmit page to select a project and finalize the procedure.</p>
</dd>
<dt><a href="#ContestSubmit">ContestSubmit</a></dt>
<dd><p>User selects a project for the contest and submits their entry.</p>
</dd>
<dt><a href="#CTA">CTA</a></dt>
<dd><p>Call To Action Component, encourage users to sign up after visiting SEO-enable page</p>
</dd>
<dt><a href="#Discussion">Discussion</a></dt>
<dd><p>Discussion Board wraps a list of threads (which in turn hosts a list of comments). Discussion boards 
currently only apply to slides, but they are designed to be able to apply to anything (projects, codeblocks, etc)</p>
</dd>
<dt><a href="#IslandLink">IslandLink</a></dt>
<dd><p>IslandLink is the zoomed-out picture of the island used in the overworld map, lesson plan, etc</p>
</dd>
<dt><a href="#Loading">Loading</a></dt>
<dd><p>Loading is explicitly used by CANON itself for any page that has canon &quot;needs&quot;, which is why this
is a full container page with <clouds>. The LoadingSpinner component was separated out for embedded use (no clouds)</p>
</dd>
<dt><a href="#LoadingSpinner">LoadingSpinner</a></dt>
<dd><p>Loading spinner for a huge number of components in Codelife, mostly used in render cycles while 
waiting for axios to return with data</p>
</dd>
<dt><a href="#LoginForm">LoginForm</a></dt>
<dd><p>Works alongside SignUpForm to log users in. Essentially a wrapper for the canon &quot;login&quot; action</p>
</dd>
<dt><a href="#Nav">Nav</a></dt>
<dd><p>Nav Component is the header of the page - containing login controls and the Island Browser</p>
</dd>
<dt><a href="#PasswordReset">PasswordReset</a></dt>
<dd><p>Wrapper Component for the reset password dispatch action of canon</p>
</dd>
<dt><a href="#ProjectCard">ProjectCard</a></dt>
<dd><p>ProjectCard, similar to CodeBlockCard, is a small visual container with a Dialog popover to showcase projects.
It is used on the Homepage as well as in User Profiles to list their projects</p>
</dd>
<dt><a href="#ReportBox">ReportBox</a></dt>
<dd><p>ReportBox is a reusable component for reporting threads, comments, projects, and codeblocks for 
inappropriate content. As with many data structures in codelife, it uses a SINGLE reports table, 
with a &quot;type&quot; column that designates which table the report_id refers to.</p>
</dd>
<dt><a href="#Search">Search</a></dt>
<dd><p>The Search component is embedded in Nav and is used to search users and projects. It utilizes postgres trigrams serverside (see readme)</p>
</dd>
<dt><a href="#SelectGeo">SelectGeo</a></dt>
<dd><p>Component for selecting a location from a database of geo codes in Brazil</p>
</dd>
<dt><a href="#SelectSchool">SelectSchool</a></dt>
<dd><p>Component for choosing a school from a db of school ids and geos - meant to be used in conjunction with SelectGeo</p>
</dd>
<dt><a href="#ShareDirectLink">ShareDirectLink</a></dt>
<dd><p>Popover Component for sharing a link to a students project/codeblock. Copies url to clipboard.</p>
</dd>
<dt><a href="#ShareFacebookLink">ShareFacebookLink</a></dt>
<dd><p>Component for sharing facebook links. Due to the fact that xvfb screenshots require a few seconds to render, 
this component receives a &quot;screenshotReady&quot; prop from the embedding component, which waits a few seconds 
to ensure that Facebook&#39;s FIRST capture of the page has the finished screenshot</p>
</dd>
<dt><a href="#SignupForm">SignupForm</a></dt>
<dd><p>Sister component to AuthForm, this component wraps the Canon &quot;signup&quot; action and does appropriate error checking</p>
</dd>
<dt><a href="#InputCode">InputCode</a></dt>
<dd><p>InputCode is a slide type that requires the student to complete a coding test
The CodeEditor component is embedded with a series of rules, and the slide will 
not unblock until the student submits a passing code section. It is mostly a wrapper
for CodeEditor, with some controls to execute controls or unblock a slide.</p>
</dd>
<dt><a href="#Quiz">Quiz</a></dt>
<dd><p>Quiz is a blocking multiple-choice question, powered by the quizjson column in the slides db</p>
</dd>
<dt><a href="#RenderCode">RenderCode</a></dt>
<dd><p>RenderCode is similar to InputCode, but the CodeEditor is in readonly mode
For showing code examples with explanations.</p>
</dd>
<dt><a href="#TextImage">TextImage</a></dt>
<dd><p>TextImage is text left, image right. Images are stored in /slide_images/{id}.jpg
Images are uploaded through the CMS and a translated version is chosen here via locales</p>
</dd>
<dt><a href="#Thread">Thread</a></dt>
<dd><p>A thread is the top-level child of a Discussion. Discussions have many threads, threads have many comments.</p>
</dd>
<dt><a href="#UserCard">UserCard</a></dt>
<dd><p>UserCard is a component used on a profile page to display other users that share the logged in user&#39;s school or location</p>
</dd>
<dt><a href="#About">About</a></dt>
<dd><p>About page - contains translated about text and a simple photoslide component from Datawheel&#39;s first visit to Minas</p>
</dd>
<dt><a href="#Contest">Contest</a></dt>
<dd><p>Contest Component handles the (currently postponed) contest, including all the steps and checks to ensure eligibility.
Page is public-facing (doesn&#39;t require login) to gain attention - the first step is creating an account</p>
</dd>
<dt><a href="#Glossary">Glossary</a></dt>
<dd><p>The Glossary component retrieves words 
It is worth noting that the storage of glossary words is somewhat split-brained. Here in Glossary.jsx, canon&#39;s &quot;need&quot; functionality
is used to ensure that words are rendered server-side and therefore indexable by search engines. However, glossary words used to live 
in the Redux Store (and in QuillWrapper, this is still how they are loaded). Both places use the same API endpoint - but one 
uses canon needs, the other puts the data into redux in App.jsx&#39;s mount method.</p>
</dd>
<dt><a href="#Home">Home</a></dt>
<dd><p>Homepage component - mostly a wrapper for other smaller components (cards, features, etc)</p>
</dd>
<dt><a href="#Level">Level</a></dt>
<dd><p>Main Level-viewing component (e.g., Jungle Island). It shows a list of the levels available as well as the ending codeblock test.
Codeblocks by other users are listed underneath the island</p>
</dd>
<dt><a href="#Island">Island</a></dt>
<dd><p>Displays all available islands</p>
</dd>
<dt><a href="#Leaderboard">Leaderboard</a></dt>
<dd><p>Leaderboard is a sortable table that lists users by their in-game progress.</p>
</dd>
<dt><a href="#LearnMore">LearnMore</a></dt>
<dd><p>Simple partners page to link to other online coding projects</p>
</dd>
<dt><a href="#LessonPlan">LessonPlan</a></dt>
<dd><p>A public-facing listing of all slides and quizzes, to be used by teachers as a lesson plan,
students as a reference guide, and to aid in directing users to the site via search engines.
Lesson plan uses Canon&#39;s &quot;Needs&quot; to render the page serverside, so that the page is indexable
by SEO bots</p>
</dd>
<dt><a href="#Profile">Profile</a></dt>
<dd><p>Class component for a user profile.
This is a public page and meant to be shared.
If a user is logged in AND this is their profile, show an
edit button allowing them to edit it.</p>
</dd>
<dt><a href="#UserCodeBlocks">UserCodeBlocks</a></dt>
<dd><p>Class component for displaying lists of user&#39;s snippets.
This is shown on the public profile for a user and requires sending
1 prop: a ref to the user</p>
</dd>
<dt><a href="#UserProjects">UserProjects</a></dt>
<dd><p>Class component for displaying lists of user&#39;s projects.
This is shown on the public profile for a user and requires sending
1 prop: a ref to the user</p>
</dd>
<dt><a href="#UsersList">UsersList</a></dt>
<dd><p>Class component for displaying lists of user&#39;s snippets.
This is shown on the public profile for a user and requires sending
1 prop: a ref to the user</p>
</dd>
<dt><a href="#Projects">Projects</a></dt>
<dd><p>Projects is one of the largest Pages in codelife - It is responsible for all CRUD
operations of projects, processing screenshots, and listing user codeblocks for inspiration.
Longer term, this should be refactored into smaller components.</p>
</dd>
<dt><a href="#ResetPw">ResetPw</a></dt>
<dd><p>Very small wrapper class for PasswordReset Component</p>
</dd>
<dt><a href="#Share">Share</a></dt>
<dd><p>The Share Page is a top-level page that does not require login, enabling users to share
their projects or codeblocks on facebook or with others. It looks up the content via name/user
and renders a fullscreen codeeditor for display, essentially acting as a hosting page for 
the students&#39; work. Show a Report bar on the bottom for logged in users to report inappropriate content</p>
</dd>
<dt><a href="#Slide">Slide</a></dt>
<dd><p>The slide component is the wrapper for all the various slidetypes in Codelife. However, 
it interacts a great deal with the db and greater site, as reaching the last slide 
updates user progress, and each slide has a Discussion board beneath it. It&#39;s important
to note that currently a Level must be beaten all at once - the &quot;latestSlideCompleted&quot; 
variable in state is not persisted anywhere, and leaving the lesson does not restart the
user halfway through a level. Longer term, more granular tracking of user location would
be a nice enhancement.</p>
</dd>
<dt><a href="#Splash">Splash</a></dt>
<dd><p>Simple splash page that lists about text for the Codelife Project</p>
</dd>
<dt><a href="#Survey">Survey</a></dt>
<dd><p>Completed/Deprecated Survey Module from a 2017 Survey that followed a beta test in 
Minas Gerais. Consists of Radio buttons and a DB post.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#threadInclude">threadInclude</a></dt>
<dd><p>threadsRoute is used for retrieving threads and their associated comments.
Unlike islands, likes, and many of the other earlier data structures in development,
threads make better use of Sequelize associations, implicitly including comments in the
thread payloads they belong to. This is distinctly different from islands/levels/slides,
which get entire lists from the tables and then compile them client side. Going forward,
the hierarchical/sequelize-association method of delivering API data (without flattening)
is the more correct one.
Threads have entity_ids and types. Currently the only two types are comments and threads,
however the intention was that discussions could expand to encompass projects/codeblocks or more</p>
</dd>
<dt><a href="#cvMatch">cvMatch</a></dt>
<dd><p>Given a rule and a block of code, check the Javascript and perform an exact match
check on the regex. Used for things like &quot;code must contain getElementById&quot;</p>
</dd>
<dt><a href="#cvNests">cvNests</a></dt>
<dd><p>Given a rule and a block of code, check that a given tag is nested inside another
tag. Used for things like &quot;html nests body.&quot; Note that this does not currently
account for subsequent occurences (only checks for first occurences)</p>
</dd>
<dt><a href="#cvUses">cvUses</a></dt>
<dd><p>Given a rule and a block of code, use a hard-coded regex to check for a SPECIFIC
pattern. Example include a for block &quot;for (;;) {}&quot;, ifelse &quot;if () {} else {}&quot;
or a generic invocation of a function &quot;functionName(){}&quot;</p>
</dd>
<dt><a href="#attrCount">attrCount</a></dt>
<dd><p>Given a needle (like h1), an attribute (like color), a value (like red), and a JSON
representation of the code as prepared by himalaya (HTML parser), recursively climb
down the nested json tree, testing at each node for the presence of the needle,
and if provided, whether that node has an attribute, and, if provided, whether that 
attribute&#39;s value exactly matches the provided value.</p>
</dd>
<dt><a href="#cvContainsSelfClosingTag">cvContainsSelfClosingTag</a></dt>
<dd><p>Given a rule and a block of code, search for a self closing tag such as <img />
Optionally run attrCount to check for extra rules (such as requiring &quot;src&quot;)</p>
</dd>
<dt><a href="#cvContainsOne">cvContainsOne</a></dt>
<dd><p>Given a rule and a block of code, ensure that the given needle (such as <html>)
occurs once and only once in the code (useful for tags like body, head, html)</p>
</dd>
<dt><a href="#cvContainsTag">cvContainsTag</a></dt>
<dd><p>Given a rule and a block of code, check if a given tag (such as <p>) is included in the 
code. Optionally, use attrCount to match any provided attributes or values in the rule.</p>
</dd>
<dt><a href="#cvContainsStyle">cvContainsStyle</a></dt>
<dd><p>Given a rule and a block of code, using the &quot;css&quot; module to turn the css into a crawlable
object. Fold over that generated parsed object and drill down to check if the rule&#39;s property
matches the property and value of the css entered by the student.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#flattenCodeBlock">flattenCodeBlock(user, cb)</a> ⇒ <code>Object</code></dt>
<dd><p>Given the logged-in user and a codeblock, this function &quot;flattens&quot; the object by reaching
into the associated tables queries (such as reports and likes) and bubbling them up to a top-level prop
This type of function is really only used here and in projectsRoute.  As codelife development progressed,
the pattern shifted more to expect the nested nature of sequelize queries, meaning flattening wasn&#39;t necessary.</p>
</dd>
<dt><a href="#strip">strip()</a></dt>
<dd><p>This route is specifically for the canon &quot;needs&quot; version of the glossary
It has a lang switch because the glossary needs to be rendered server side
for SEO optimization.</p>
</dd>
<dt><a href="#flattenProfile">flattenProfile(user, p)</a></dt>
<dd><p>Similar to codeblocksroute, earlier in the project a lot of work was done to keep 
the payloads returned by APIs as flat objects. Later routes trended more towards trusting
sequelize to form the hierarchy via associations. This helper function bubbles up associations
into top-level properties.</p>
</dd>
<dt><a href="#flattenProject">flattenProject(user, p)</a> ⇒ <code>Object</code></dt>
<dd><p>Given the logged-in user and a project, this function &quot;flattens&quot; the object by reaching
into the associated tables queries (such as reports and likes) and bubbling them up to a top-level prop
This type of function is really only used here and in codeblocksroute.  As codelife development progressed,
the pattern shifted more to expect the nested nature of sequelize queries, meaning flattening wasn&#39;t necessary.</p>
</dd>
<dt><a href="#pruneThread">pruneThread(user, t)</a> ⇒ <code>Object</code></dt>
<dd><p>Given a user and a thread, prepare the thread to be returned to the requester.
This involves a number of operations, including collating likes and reports, rewriting
banned content, and deleting certain sensitive keys so they don&#39;t leak out through the API</p>
</dd>
</dl>

<a name="AuthForm"></a>

## AuthForm
AuthForm is a wrapper component that switches between LoginForm and Signup Form
It can be primed with a default via the initialMode prop.

**Kind**: global class  

* * *

<a name="Browser"></a>

## Browser
Browser is a drop-down menu embedded in Nav that lets the user jump to any
level or island that they have beaten in the past

**Kind**: global class  

* [Browser](#Browser)
    * [.componentDidMount()](#Browser+componentDidMount)
    * [.buildTree()](#Browser+buildTree)
    * [.initFromProps(nodeFromProps)](#Browser+initFromProps)
    * [.fixNulls(obj)](#Browser+fixNulls) ⇒ <code>Object</code>
    * [.reloadProgress()](#Browser+reloadProgress)
    * [.selectNodeFromProps()](#Browser+selectNodeFromProps)
    * [.handleNodeClick(node)](#Browser+handleNodeClick)


* * *

<a name="Browser+componentDidMount"></a>

### browser.componentDidMount()
On mount, fetch all islands/levels/slides, sort them, and arrange them 
hierarchically for use in the Blueprint Tree. Also grab the logged in user's progress
so that the browser can lock unbeaten levels.

**Kind**: instance method of [<code>Browser</code>](#Browser)  

* * *

<a name="Browser+buildTree"></a>

### browser.buildTree()
Builds the "nodes" object that will be used to populate the blueprint tree.
The Blueprint Tree component requires lots of metadata and nesting, so a fair
amount of crawling must be done to populate it properly
Note: This is borrowed heavily from the tree in the CMS. Someday they should be merged

**Kind**: instance method of [<code>Browser</code>](#Browser)  

* * *

<a name="Browser+initFromProps"></a>

### browser.initFromProps(nodeFromProps)
Given a blueprint tree node, saved during the buildTree function, expand and select
the appropriate node to match the location

**Kind**: instance method of [<code>Browser</code>](#Browser)  

| Param | Type | Description |
| --- | --- | --- |
| nodeFromProps | <code>Object</code> | A Blueprint Tree node |


* * *

<a name="Browser+fixNulls"></a>

### browser.fixNulls(obj) ⇒ <code>Object</code>
Helper function to avoid errors from accessing non-existent properties
Longer term, database defaults values should be established to avoid this

**Kind**: instance method of [<code>Browser</code>](#Browser)  
**Returns**: <code>Object</code> - an object whose null/undefined params are changed to ""  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | the object to prune |


* * *

<a name="Browser+reloadProgress"></a>

### browser.reloadProgress()
As the user beats new levels, they are written to the db, but no redux-level store
is updated. This public-facing function is invoked by Nav.jsx when the Browser is opened,
resulting in a short loading screen while the latest progress is retrieved.
See Nav.jsx for more details.

**Kind**: instance method of [<code>Browser</code>](#Browser)  

* * *

<a name="Browser+selectNodeFromProps"></a>

### browser.selectNodeFromProps()
Similar to initNodeFromProps which expands the Blueprint Tree, this function selects
the node that matches the LinkObj provided by Nav.

**Kind**: instance method of [<code>Browser</code>](#Browser)  

* * *

<a name="Browser+handleNodeClick"></a>

### browser.handleNodeClick(node)
Callback for clicking a node. Uses browserhistory to navigate the user to the new page

**Kind**: instance method of [<code>Browser</code>](#Browser)  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Object</code> | The blueprint node that was clicked |


* * *

<a name="Checkpoint"></a>

## Checkpoint
Checkpoint is a one-time pop-up that asks the user to fill in his or her school/location
Originally intended to be a more generic "Checkpoint" system that would support arbitrary 
banners/messages, it is currently only used for gathering school info

**Kind**: global class  

* * *

<a name="CodeBlockCard"></a>

## CodeBlockCard
CodeBlockCards appear throughout the site as a way of previewing a student's codeblock
It contains both the small clickable card with preview image AND the dialog box that pops
up over the page and shows the full screen code editor.

**Kind**: global class  

* [CodeBlockCard](#CodeBlockCard)
    * [.saveLikeStatus()](#CodeBlockCard+saveLikeStatus)
    * [.generateScreenshot()](#CodeBlockCard+generateScreenshot)
    * [.selectFork()](#CodeBlockCard+selectFork)
    * [.toggleFeature()](#CodeBlockCard+toggleFeature)
    * [.toggleFork()](#CodeBlockCard+toggleFork)
    * [.toggleLike()](#CodeBlockCard+toggleLike)
    * [.directLike()](#CodeBlockCard+directLike)
    * [.componentDidMount()](#CodeBlockCard+componentDidMount)
    * [.componentDidUpdate()](#CodeBlockCard+componentDidUpdate)
    * [.handleReport()](#CodeBlockCard+handleReport)


* * *

<a name="CodeBlockCard+saveLikeStatus"></a>

### codeBlockCard.saveLikeStatus()
Write the current like status of this codeblock to the db.
CodeBlockList must be informed when this happens so it can reorder the codeblocks
(liked codeblocks come first) so props.reportLike on return.

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockCard+generateScreenshot"></a>

### codeBlockCard.generateScreenshot()
Admin-only button callback that pings an API route to manually generate a screenshot
for this codeblock (usually only happens when codeblock owner saves file)

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockCard+selectFork"></a>

### codeBlockCard.selectFork()
When the forking sub-menu is opened, highlight and select the text for easy editing

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockCard+toggleFeature"></a>

### codeBlockCard.toggleFeature()
Admin-only button callback that sets a codeblock as featured or not (featured codeblocks
show up on the homepage)

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockCard+toggleFork"></a>

### codeBlockCard.toggleFork()
Codeblocks can be forked into projects, so students may remix another student's work.
This function creates that new project and populates it with the codeblock data

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockCard+toggleLike"></a>

### codeBlockCard.toggleLike()
Switch that functions a like on and off. Note that this is front-end only
and does not update the backend.

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockCard+directLike"></a>

### codeBlockCard.directLike()
Toggles the like visually (toggleLike) and saves it to the db (saveLikeStatus)

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockCard+componentDidMount"></a>

### codeBlockCard.componentDidMount()
On mount, grab the codeblock from props and create a unique placeholder fork name via epoch time

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockCard+componentDidUpdate"></a>

### codeBlockCard.componentDidUpdate()
On Update, if new props have been loaded in, load the new codeblock into state and update fork title

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockCard+handleReport"></a>

### codeBlockCard.handleReport()
This method is passed down as a callback to ReportBox. When reportBox signals a report,
it calls this function, which updates the embedded codeblock itself and forces a refresh

**Kind**: instance method of [<code>CodeBlockCard</code>](#CodeBlockCard)  

* * *

<a name="CodeBlockEditor"></a>

## CodeBlockEditor
CodeBlockEditor is the popover that comes up for the final test of an island.
It is mostly a wrapper around CodeEditor that provides the student with the test prompt,
cheat sheet, and db routes to save their progress when they pass the test

**Kind**: global class  

* [CodeBlockEditor](#CodeBlockEditor)
    * [.componentDidMount()](#CodeBlockEditor+componentDidMount)
    * [.onFirstCompletion()](#CodeBlockEditor+onFirstCompletion)
    * [.setExecState()](#CodeBlockEditor+setExecState)
    * [.saveProgress()](#CodeBlockEditor+saveProgress)
    * [.onChangeText()](#CodeBlockEditor+onChangeText)
    * [.resetCodeBlock()](#CodeBlockEditor+resetCodeBlock)
    * [.attemptReset()](#CodeBlockEditor+attemptReset)
    * [.executeCode()](#CodeBlockEditor+executeCode)
    * [.changeCodeblockName()](#CodeBlockEditor+changeCodeblockName)
    * [.clickSave()](#CodeBlockEditor+clickSave)
    * [.verifyAndSaveCode()](#CodeBlockEditor+verifyAndSaveCode)


* * *

<a name="CodeBlockEditor+componentDidMount"></a>

### codeBlockEditor.componentDidMount()
On Mount, parse various props passed down and add them to state.

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+onFirstCompletion"></a>

### codeBlockEditor.onFirstCompletion()
When a user passes a codeblock for the first time, the parent Island component
must be informed so it can close the popover and show a the "next island" dialog.
Pass this callback down to codeeditor to enable that

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+setExecState"></a>

### codeBlockEditor.setExecState()
Callback passed to CodeEditor so that CodeEditor can report when the user is using
a script tag (therefore show an execute button in here in CodeBlockEditor)

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+saveProgress"></a>

### codeBlockEditor.saveProgress()
Write progress to db when codeblock is passed

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+onChangeText"></a>

### codeBlockEditor.onChangeText()
Callback passed down to the CodeEditor, allowing this parent component to respond
to text changes if desired.

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+resetCodeBlock"></a>

### codeBlockEditor.resetCodeBlock()
Set codeblock back to original test prompt state

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+attemptReset"></a>

### codeBlockEditor.attemptReset()
Show popup warning (Are you sure?)

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+executeCode"></a>

### codeBlockEditor.executeCode()
Show popup warning (Are you sure?)

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+changeCodeblockName"></a>

### codeBlockEditor.changeCodeblockName()
Change codeblock name in place. Note that this doesn't save it to the db yet

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+clickSave"></a>

### codeBlockEditor.clickSave()
Intermediary function that blocks some editing functions until the save is complete
This gets around a known bug where clicking save twice can write two copies to the db

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockEditor+verifyAndSaveCode"></a>

### codeBlockEditor.verifyAndSaveCode()
When the user clicks save & submit, make sure the internal CodeEditor has verified that
their code is passing. If so, write the codeblock and progress to the db, and update the 
in-state version to reflect the new code

**Kind**: instance method of [<code>CodeBlockEditor</code>](#CodeBlockEditor)  

* * *

<a name="CodeBlockList"></a>

## CodeBlockList
CodeBlockList is used by Projects to display codeblocks to draw inspiration from.

**Kind**: global class  

* [CodeBlockList](#CodeBlockList)
    * [.componentDidMount()](#CodeBlockList+componentDidMount)
    * [.reportLike()](#CodeBlockList+reportLike)
    * [.handleFork()](#CodeBlockList+handleFork)


* * *

<a name="CodeBlockList+componentDidMount"></a>

### codeBlockList.componentDidMount()
On Mount, fetch all codeblocks, sort them by island, then separate into liked, unliked, and "mine" (logged in user's)
Also fetch user progress so that unbeaten island codeblocks show as greyed out

**Kind**: instance method of [<code>CodeBlockList</code>](#CodeBlockList)  

* * *

<a name="CodeBlockList+reportLike"></a>

### codeBlockList.reportLike()
Because a like can occur in a nested component (in this case, CodeBlockCard), this container component
needs a callback function that can rearrange the items that exist in state.

**Kind**: instance method of [<code>CodeBlockList</code>](#CodeBlockList)  

* * *

<a name="CodeBlockList+handleFork"></a>

### codeBlockList.handleFork()
Codeblocks have the ability to "fork" into a new project. For most embeddings of CodeBlockCards, this is as simple
as creating the new project and using browserHistory to navigate the user to that page. However, as the user is 
ALREADY ON the Projects page, a callback is required to tell the parent component (Projects.jsx) to make a new project
and update itself accordingly

**Kind**: instance method of [<code>CodeBlockList</code>](#CodeBlockList)  

* * *

<a name="CodeEditor"></a>

## CodeEditor
CodeEditor is a two-panel rendering component for student code.
It uses AceEditor for the student panel (left), and a remote rendering iframe for the page preview (right).

**Kind**: global class  

* [CodeEditor](#CodeEditor)
    * [.componentDidMount()](#CodeEditor+componentDidMount)
    * [.componentWillUnmount()](#CodeEditor+componentWillUnmount)
    * [.pingRemote()](#CodeEditor+pingRemote)
    * [.componentDidUpdate()](#CodeEditor+componentDidUpdate)
    * [.getBaseRules()](#CodeEditor+getBaseRules) ⇒ <code>Array</code>
    * [.receiveMessage(event)](#CodeEditor+receiveMessage)
    * [.getTitleText(theText)](#CodeEditor+getTitleText) ⇒ <code>String</code>
    * [.stripJS(json)](#CodeEditor+stripJS) ⇒ <code>Array</code>
    * [.checkForErrors()](#CodeEditor+checkForErrors)
    * [.writeToIFrame(theText)](#CodeEditor+writeToIFrame)
    * [.hasJS(theText)](#CodeEditor+hasJS)
    * [.renderText(executeJS)](#CodeEditor+renderText)
    * [.iFrameLoaded()](#CodeEditor+iFrameLoaded)
    * [.onChangeText(theText)](#CodeEditor+onChangeText)
    * [.myCatch(e)](#CodeEditor+myCatch)
    * [.myLog()](#CodeEditor+myLog)
    * [.evalType(value)](#CodeEditor+evalType) ⇒ <code>String</code>
    * [.handlePost()](#CodeEditor+handlePost)
    * [.checkJVMState(needle, value)](#CodeEditor+checkJVMState)
    * [.reverse(s)](#CodeEditor+reverse) ⇒ <code>String</code>
    * [.internalRender()](#CodeEditor+internalRender)
    * [.setEntireContents(theText)](#CodeEditor+setEntireContents)
    * [.getEntireContents()](#CodeEditor+getEntireContents) ⇒ <code>String</code>
    * [.isPassing()](#CodeEditor+isPassing) ⇒ <code>Boolean</code>
    * [.changesMade()](#CodeEditor+changesMade) ⇒ <code>Boolean</code>
    * [.setChangeStatus(changesMade)](#CodeEditor+setChangeStatus)
    * [.executeCode()](#CodeEditor+executeCode)
    * [.toggleDrawer()](#CodeEditor+toggleDrawer)
    * [.fullscreenEditorToggle()](#CodeEditor+fullscreenEditorToggle)


* * *

<a name="CodeEditor+componentDidMount"></a>

### codeEditor.componentDidMount()
When CodeEditor mounts, add an EventListener that listens for postMessage events from the sandbox.
Also, initiate a ping that checks with the sandbox page until it is ready to render.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+componentWillUnmount"></a>

### codeEditor.componentWillUnmount()
Before CodeEditor unmounts, remove the EventListener that listens for postMessage events from the sandbox.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+pingRemote"></a>

### codeEditor.pingRemote()
On a set interval, ping the remote sandbox until we receive a postMessage indicating that it's ready.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+componentDidUpdate"></a>

### codeEditor.componentDidUpdate()
On update, detect the state change of hasJS to inform the parent component whether or not to show an "Execute" button.
If the rules in the props have changed, the parent component has changed (e.g., changing slides), necessitating state change of rules.
Additionally, if the code content in the props have changed, clear any execution timeouts and reset the editor state.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+getBaseRules"></a>

### codeEditor.getBaseRules() ⇒ <code>Array</code>
Generates a base state of HTML rules that will always be true for a well-formed page.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  
**Returns**: <code>Array</code> - Array of basic HTML rules in JSON format  

* * *

<a name="CodeEditor+receiveMessage"></a>

### codeEditor.receiveMessage(event)
Listens for events from postMessage, generated by the embedded iframe sandbox on codelife.tech.
If the message didn't come from codelife.tech, automatically return.
If the message is a special wakeup message, clear the ping intervals and set the iframe as ready for use.
For all other messages, forward them to the handlePost function.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>String</code> | A postMessage event. |


* * *

<a name="CodeEditor+getTitleText"></a>

### codeEditor.getTitleText(theText) ⇒ <code>String</code>
Given the current text in the editor, if the HTML has a properly formatted <title> field, extract and return it.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  
**Returns**: <code>String</code> - The extracted text between <title> and </title>  

| Param | Type | Description |
| --- | --- | --- |
| theText | <code>String</code> | The current text contents of the editor |


* * *

<a name="CodeEditor+stripJS"></a>

### codeEditor.stripJS(json) ⇒ <code>Array</code>
Given a parsed JSON representation of the current code, recursively find and remove the contents of anything between <script> tags.
This is important because we re-render the page on each keystroke, so firing JavaScript executions for each key is not ideal.
Save the stripped-out JS into state, so we can determine from its prescence there if we should show an execute button or not.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  
**Returns**: <code>Array</code> - A rebuilt (minus JavaScript) JSON object that himalaya can parse back into HTML.  

| Param | Type | Description |
| --- | --- | --- |
| json | <code>Object</code> | A JSON Representation of the current text, as parsed by the himalaya library |


* * *

<a name="CodeEditor+checkForErrors"></a>

### codeEditor.checkForErrors()
Grabs the current editor text from state, and prepare an array of true/false tests to be applied to it.
Based on the results of those testing rules, set state variables that provide completion % feedback to the student.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+writeToIFrame"></a>

### codeEditor.writeToIFrame(theText)
Given the text currently in the editor, send a postMessage containing that source to the sandbox for rendering.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

| Param | Type | Description |
| --- | --- | --- |
| theText | <code>String</code> | The text to be rendered in the sandbox |


* * *

<a name="CodeEditor+hasJS"></a>

### codeEditor.hasJS(theText)
Given the text currently in the editor, determine if it has open and closing script tags.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

| Param | Type | Description |
| --- | --- | --- |
| theText | <code>String</code> | The current editor text |


* * *

<a name="CodeEditor+renderText"></a>

### codeEditor.renderText(executeJS)
Called explictly after state updates that change the text. Using the helper function stripJS, this function prepares
the code to be shipped to the sandbox via writeToIFrame. If it is the first time we are rendering, such as in a slide example,
execute the JavaScript after a short delay.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

| Param | Type | Description |
| --- | --- | --- |
| executeJS | <code>Boolean</code> | If set to true, this function will execute any included JavaScript after a short delay. |


* * *

<a name="CodeEditor+iFrameLoaded"></a>

### codeEditor.iFrameLoaded()
Called after "awake" message is received from sandbox, indicating that the iFrame is loaded and ready for postMessage events.
Fetches rule text from API. On completion, set the prop-given initial text in state and invoke the onChangeText callback, so any
componenent that embeds CodeEdtior may subscribes to this callback may be notified that the text has changed.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+onChangeText"></a>

### codeEditor.onChangeText(theText)
Callback for the embedded AceEditor component. Used to bubble up text change events to this object's state and to the parent.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

| Param | Type | Description |
| --- | --- | --- |
| theText | <code>String</code> | The current state of the text in the code editor. |


* * *

<a name="CodeEditor+myCatch"></a>

### codeEditor.myCatch(e)
Invoked by handlePost when an error is caught by the sandbox. Concatenates the error message to the console.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>String</code> | The error string retrieved from the sandbox |


* * *

<a name="CodeEditor+myLog"></a>

### codeEditor.myLog()
Invoked by handlePost when an log message is returned by the sandbox. Concatenates the log message to the console.
Because console.log can take multiple comma-separated arguments, extract the list using Array.from(arguments)

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+evalType"></a>

### codeEditor.evalType(value) ⇒ <code>String</code>
Helper function to determine argument type for syntax highlighting in emulated console.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  
**Returns**: <code>String</code> - A String representing the type of the provided object  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | Value of any type |


* * *

<a name="CodeEditor+handlePost"></a>

### codeEditor.handlePost()
Called by receiveMessage when postMessage events arrive from the sandbox. The first argument will always be a type
designator that describes the following arguments so they can be routed for processing. A type of "completed" means
the JavaScript has completed execution in the remote sandbox and error checking can begin.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+checkJVMState"></a>

### codeEditor.checkJVMState(needle, value)
Called by handlePost to process postMessage events of type "rule". Iterates over list of rules in state and sets
each rule's passing state based on whether the given argument matches type and value restrictions.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

| Param | Type | Description |
| --- | --- | --- |
| needle | <code>String</code> | The keyword rulename this value belongs to, typically a variable or function name |
| value | <code>\*</code> | The actual, remote-sandbox determined value to check against. |


* * *

<a name="CodeEditor+reverse"></a>

### codeEditor.reverse(s) ⇒ <code>String</code>
Reverses a string.  Used by internalRender() to assist with regex.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  
**Returns**: <code>String</code> - The reversed string  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>String</code> | The string to be reversed |


* * *

<a name="CodeEditor+internalRender"></a>

### codeEditor.internalRender()
One of the more complex functions in CodeLife, internalRender is invoked when an "execute code" button is pressed.
This function is responsible for sending a specially prepared version of the student's source code to a remote sandbox for execution.
The remote sandbox has an iFrame of its own, where the code is being injected. References to the "parent" of this iFrame
refer to functions in the sandbox responsible for sending information back to Codelife.com via postMessage.
To prepare the code for remote execution, several steps must be taken:
- replace console.log with parent.myPost("console"...) to intercept console statements.
- prepend JavaScript code with initialization functions that "zero out" any rule variables the student must set correctly.
- append JavaScript code with parent.myPost("rule"...) methods that send variable state back to Codelife.com
- further append JavaScript code with parent.myPost("completed"...) to indicate that the run has completed.
- take ALL of that code, wrap it into a string literal that eval()s the code and catches any runtime errors.
- take the student's current code and replace its JavaScript with the prepared JavaScript
- invoke writeToIFrame, which sends the entire payload to the remote sandbox for execution.
The sandbox then injects the prepared code into the iFrame, which calls its parent functions, and reports back here via postMessage.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+setEntireContents"></a>

### codeEditor.setEntireContents(theText)
Externally available method that components can use to set the contents of the Code Editor functionally (as opposed to via props)

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

| Param | Type | Description |
| --- | --- | --- |
| theText | <code>String</code> | The string to set as the editor contents. |


* * *

<a name="CodeEditor+getEntireContents"></a>

### codeEditor.getEntireContents() ⇒ <code>String</code>
Externally available method that components can use to get the contents of the Code Editor functionally (as opposed to via props)

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  
**Returns**: <code>String</code> - The current contents of the editor  

* * *

<a name="CodeEditor+isPassing"></a>

### codeEditor.isPassing() ⇒ <code>Boolean</code>
Externally available method that components can use to fetch passing state

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  
**Returns**: <code>Boolean</code> - Whether the code is in a passing state  

* * *

<a name="CodeEditor+changesMade"></a>

### codeEditor.changesMade() ⇒ <code>Boolean</code>
Externally available method that components can use to determine whether the editor is "dirty," i.e., changes made that require saving

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  
**Returns**: <code>Boolean</code> - Whether changes have been made to the code since its initial state or last save  

* * *

<a name="CodeEditor+setChangeStatus"></a>

### codeEditor.setChangeStatus(changesMade)
Externally available method that components can use to set the editor as "dirty/clean" i.e., changes made.
This is a necessary callback for operations like Saving Content - embedding components need to set changesMade to false.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

| Param | Type | Description |
| --- | --- | --- |
| changesMade | <code>Boolean</code> | Boolean value to set "dirty/clean" status in editor. |


* * *

<a name="CodeEditor+executeCode"></a>

### codeEditor.executeCode()
Externally available method that components can use to execute the JavaScript contents of the editor.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+toggleDrawer"></a>

### codeEditor.toggleDrawer()
Externally available method that components can use to set drawer visibility state.

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="CodeEditor+fullscreenEditorToggle"></a>

### codeEditor.fullscreenEditorToggle()
toggle fullscreen state

**Kind**: instance method of [<code>CodeEditor</code>](#CodeEditor)  

* * *

<a name="DrawerValidation"></a>

## DrawerValidation
The CodeEditor is responsible for handling violation of the rules set out for a given
programming challenge. A list of errors is passed in as a prop - this component is 
responsible for creating a readable sentence form of what is wrong with the student's code.
For example, "Your HTML code is missing an <h1> tag". The format of this language is stored in
the database as "Your {{p1}} is missing {{p2}}." (Note that this need be translated by lang)

**Kind**: global class  

* * *

<a name="CollabList"></a>

## CollabList
Provides a list of Collaborators for a project provided by props.

**Kind**: global class  

* * *

<a name="CollabSearch"></a>

## CollabSearch
Popover window so that project owners can find and add new users to collaborate on a given project

**Kind**: global class  

* [CollabSearch](#CollabSearch)
    * [.handleChange()](#CollabSearch+handleChange)
    * [.addCollaborator()](#CollabSearch+addCollaborator)
    * [.removeCollaborator()](#CollabSearch+removeCollaborator)


* * *

<a name="CollabSearch+handleChange"></a>

### collabSearch.handleChange()
Don't start hitting the database until the query is more than 2 characters long

**Kind**: instance method of [<code>CollabSearch</code>](#CollabSearch)  

* * *

<a name="CollabSearch+addCollaborator"></a>

### collabSearch.addCollaborator()
Given a clicked collaborator, if the constraints are met, post it to userprofiles_profiles (collab table)

**Kind**: instance method of [<code>CollabSearch</code>](#CollabSearch)  

* * *

<a name="CollabSearch+removeCollaborator"></a>

### collabSearch.removeCollaborator()
Given a uid and the pid of the current project, remove the matching row from userprofiles_profiles

**Kind**: instance method of [<code>CollabSearch</code>](#CollabSearch)  

* * *

<a name="Comment"></a>

## Comment
Comments belong to Threads. Note that there is no text editor here - all posting is handled by Thread.jsx.
This component is for displaying only.

**Kind**: global class  

* [Comment](#Comment)
    * [.componentDidMount()](#Comment+componentDidMount)
    * [.toggleLike()](#Comment+toggleLike)
    * [.handleReport()](#Comment+handleReport)


* * *

<a name="Comment+componentDidMount"></a>

### comment.componentDidMount()
The comment itself is passed in via props. Put it in state

**Kind**: instance method of [<code>Comment</code>](#Comment)  

* * *

<a name="Comment+toggleLike"></a>

### comment.toggleLike()
Handle Liking and Unliking of comments

**Kind**: instance method of [<code>Comment</code>](#Comment)  

* * *

<a name="Comment+handleReport"></a>

### comment.handleReport()
When the nested ReportBox component processes a report, This commment module needs to update the button to 
reflect the new state. This callback handles that.

**Kind**: instance method of [<code>Comment</code>](#Comment)  

* * *

<a name="ContestSignup"></a>

## ContestSignup
Signup page for (currently postponed) project contest. Signing up simply enters the user in the contest,
users still must go to the ContestSubmit page to select a project and finalize the procedure.

**Kind**: global class  

* [ContestSignup](#ContestSignup)
    * [.componentWillMount()](#ContestSignup+componentWillMount)
    * [.formatCPF()](#ContestSignup+formatCPF)
    * [.enterContest()](#ContestSignup+enterContest)


* * *

<a name="ContestSignup+componentWillMount"></a>

### contestSignup.componentWillMount()
On Mount, fetch the profile of the logged in user.

**Kind**: instance method of [<code>ContestSignup</code>](#ContestSignup)  

* * *

<a name="ContestSignup+formatCPF"></a>

### contestSignup.formatCPF()
Formatting rules for Cadastro de Pessoas Físicas

**Kind**: instance method of [<code>ContestSignup</code>](#ContestSignup)  

* * *

<a name="ContestSignup+enterContest"></a>

### contestSignup.enterContest()
Onclick handler that prepares entry payloads to various endpoints. Note that setting school id/ geo id in this
contest entry page also updates the actual profile of the user.

**Kind**: instance method of [<code>ContestSignup</code>](#ContestSignup)  

* * *

<a name="ContestSubmit"></a>

## ContestSubmit
User selects a project for the contest and submits their entry.

**Kind**: global class  

* [ContestSubmit](#ContestSubmit)
    * [.componentDidMount()](#ContestSubmit+componentDidMount)
    * [.submit()](#ContestSubmit+submit)


* * *

<a name="ContestSubmit+componentDidMount"></a>

### contestSubmit.componentDidMount()
On Mount, fetch all the projects of the currently logged-in user, as well as their entry status

**Kind**: instance method of [<code>ContestSubmit</code>](#ContestSubmit)  

* * *

<a name="ContestSubmit+submit"></a>

### contestSubmit.submit()
On Click, prepare contest payload and post it to the endpoint

**Kind**: instance method of [<code>ContestSubmit</code>](#ContestSubmit)  

* * *

<a name="CTA"></a>

## CTA
Call To Action Component, encourage users to sign up after visiting SEO-enable page

**Kind**: global class  

* * *

<a name="Discussion"></a>

## Discussion
Discussion Board wraps a list of threads (which in turn hosts a list of comments). Discussion boards 
currently only apply to slides, but they are designed to be able to apply to anything (projects, codeblocks, etc)

**Kind**: global class  

* [Discussion](#Discussion)
    * [.componentDidUpdate()](#Discussion+componentDidUpdate)
    * [.newThread()](#Discussion+newThread)
    * [.selectSort()](#Discussion+selectSort)


* * *

<a name="Discussion+componentDidUpdate"></a>

### discussion.componentDidUpdate()
When the user changes slides, hit the API endpoind and fetch the new thread data

**Kind**: instance method of [<code>Discussion</code>](#Discussion)  

* * *

<a name="Discussion+newThread"></a>

### discussion.newThread()
Prepare payload and post a new thread to the db

**Kind**: instance method of [<code>Discussion</code>](#Discussion)  

* * *

<a name="Discussion+selectSort"></a>

### discussion.selectSort()
On sort selection, sort the threads in state

**Kind**: instance method of [<code>Discussion</code>](#Discussion)  

* * *

<a name="IslandLink"></a>

## IslandLink
IslandLink is the zoomed-out picture of the island used in the overworld map, lesson plan, etc

**Kind**: global class  

* * *

<a name="Loading"></a>

## Loading
Loading is explicitly used by CANON itself for any page that has canon "needs", which is why this
is a full container page with <clouds>. The LoadingSpinner component was separated out for embedded use (no clouds)

**Kind**: global class  

* * *

<a name="LoadingSpinner"></a>

## LoadingSpinner
Loading spinner for a huge number of components in Codelife, mostly used in render cycles while 
waiting for axios to return with data

**Kind**: global class  

* * *

<a name="LoginForm"></a>

## LoginForm
Works alongside SignUpForm to log users in. Essentially a wrapper for the canon "login" action

**Kind**: global class  

* * *

<a name="LoginForm+onSubmit"></a>

### loginForm.onSubmit()
The login dispatch is mapped to props and called here

**Kind**: instance method of [<code>LoginForm</code>](#LoginForm)  

* * *

<a name="Nav"></a>

## Nav
Nav Component is the header of the page - containing login controls and the Island Browser

**Kind**: global class  

* [Nav](#Nav)
    * [.componentDidMount()](#Nav+componentDidMount)
    * [.reportClick()](#Nav+reportClick)


* * *

<a name="Nav+componentDidMount"></a>

### nav.componentDidMount()
When Nav Mounts, it is almost always because the page/app is being loaded from scratch, either because 
the user is visiting for the first time, OR a login has been attempted, and the result must be handled.
As such, there is a fairly length decision tree here so that feedback can be shown.

**Kind**: instance method of [<code>Nav</code>](#Nav)  

* * *

<a name="Nav+reportClick"></a>

### nav.reportClick()
When the user clicks an island/location in the embedded Browser component, they have chosen to navigate to a
new page. This callback is needed so the Browser's wrapping component (this one) can hide the Browser.

**Kind**: instance method of [<code>Nav</code>](#Nav)  

* * *

<a name="PasswordReset"></a>

## PasswordReset
Wrapper Component for the reset password dispatch action of canon

**Kind**: global class  

* [PasswordReset](#PasswordReset)
    * [.componentDidMount()](#PasswordReset+componentDidMount)
    * [.changePassword()](#PasswordReset+changePassword)
    * [.componentDidUpdate()](#PasswordReset+componentDidUpdate)


* * *

<a name="PasswordReset+componentDidMount"></a>

### passwordReset.componentDidMount()
On Mount, access the URL information from router and grab the token if it is there.

**Kind**: instance method of [<code>PasswordReset</code>](#PasswordReset)  

* * *

<a name="PasswordReset+changePassword"></a>

### passwordReset.changePassword()
Password field change handler, ensure passwords match before submitting dispatch

**Kind**: instance method of [<code>PasswordReset</code>](#PasswordReset)  

* * *

<a name="PasswordReset+componentDidUpdate"></a>

### passwordReset.componentDidUpdate()
Listen for changes to this.props.auth, and show a Toast message that reflects its state

**Kind**: instance method of [<code>PasswordReset</code>](#PasswordReset)  

* * *

<a name="ProjectCard"></a>

## ProjectCard
ProjectCard, similar to CodeBlockCard, is a small visual container with a Dialog popover to showcase projects.
It is used on the Homepage as well as in User Profiles to list their projects

**Kind**: global class  

* [ProjectCard](#ProjectCard)
    * [.toggleDialog()](#ProjectCard+toggleDialog)
    * [.toggleFeature()](#ProjectCard+toggleFeature)
    * [.generateScreenshot()](#ProjectCard+generateScreenshot)
    * [.handleReport()](#ProjectCard+handleReport)


* * *

<a name="ProjectCard+toggleDialog"></a>

### projectCard.toggleDialog()
Project Cards, though small visually, are responsible for containing and controlling their own Dialog
Popover that shows the entirety of the project and its code

**Kind**: instance method of [<code>ProjectCard</code>](#ProjectCard)  

* * *

<a name="ProjectCard+toggleFeature"></a>

### projectCard.toggleFeature()
Admin Only function to promote the given project to featured

**Kind**: instance method of [<code>ProjectCard</code>](#ProjectCard)  

* * *

<a name="ProjectCard+generateScreenshot"></a>

### projectCard.generateScreenshot()
Admin only function to generate a screenshot for this project (usually so it can be featured on the homepage)

**Kind**: instance method of [<code>ProjectCard</code>](#ProjectCard)  

* * *

<a name="ProjectCard+handleReport"></a>

### projectCard.handleReport()
Projects embed a ReportBox to allow for flagging. If a user uses that box to report the content, this
callback notifies its parent (this component) that the project has been reported, so state can be updated

**Kind**: instance method of [<code>ProjectCard</code>](#ProjectCard)  

* * *

<a name="ReportBox"></a>

## ReportBox
ReportBox is a reusable component for reporting threads, comments, projects, and codeblocks for 
inappropriate content. As with many data structures in codelife, it uses a SINGLE reports table, 
with a "type" column that designates which table the report_id refers to.

**Kind**: global class  

* * *

<a name="Search"></a>

## Search
The Search component is embedded in Nav and is used to search users and projects. It utilizes postgres trigrams serverside (see readme)

**Kind**: global class  

* [Search](#Search)
    * [.handleChange()](#Search+handleChange)
    * [.componentDidUpdate()](#Search+componentDidUpdate)
    * [.onKeyDown()](#Search+onKeyDown)
    * [.search()](#Search+search)


* * *

<a name="Search+handleChange"></a>

### search.handleChange()
On keystroke, hit the search API endpoint

**Kind**: instance method of [<code>Search</code>](#Search)  

* * *

<a name="Search+componentDidUpdate"></a>

### search.componentDidUpdate()
Search is not a top-level component in routes.jsx, so it doesn't have access to the Router object that would indicate
what page the user is on. This makes it difficult to collapse the search results if the user clicks a link outside the
results. To get around this, a linkObj is passed down from App to Nav to here, and search is collapsed on URL change.

**Kind**: instance method of [<code>Search</code>](#Search)  

* * *

<a name="Search+onKeyDown"></a>

### search.onKeyDown()
onKeyDown is meant to capture inputs - but the arrow up/down aren't currently functional (user can use tabs and 
Enter key to go through links however). This UX could be improved.

**Kind**: instance method of [<code>Search</code>](#Search)  

* * *

<a name="Search+search"></a>

### search.search()
Send search query to API endpoint

**Kind**: instance method of [<code>Search</code>](#Search)  

* * *

<a name="SelectGeo"></a>

## SelectGeo
Component for selecting a location from a database of geo codes in Brazil

**Kind**: global class  

* [SelectGeo](#SelectGeo)
    * [.componentDidMount()](#SelectGeo+componentDidMount)
    * [.changeState()](#SelectGeo+changeState)


* * *

<a name="SelectGeo+componentDidMount"></a>

### selectGeo.componentDidMount()
On Mount, get the gid (embedded in props via userprofile) and populate the search bar accordingly

**Kind**: instance method of [<code>SelectGeo</code>](#SelectGeo)  

* * *

<a name="SelectGeo+changeState"></a>

### selectGeo.changeState()
Callback for the select box. Contains some code from what was going to be an "Unspecified" option, but was 
changed to a higher up "Rather not say" option in EditProfile.jsx which cancels out the dialog entirely 
and writes a hard-coded "-1" to the user's geo id.

**Kind**: instance method of [<code>SelectGeo</code>](#SelectGeo)  

* * *

<a name="SelectSchool"></a>

## SelectSchool
Component for choosing a school from a db of school ids and geos - meant to be used in conjunction with SelectGeo

**Kind**: global class  

* [SelectSchool](#SelectSchool)
    * [.componentDidMount()](#SelectSchool+componentDidMount)
    * [.updateSchoolList()](#SelectSchool+updateSchoolList)


* * *

<a name="SelectSchool+componentDidMount"></a>

### selectSchool.componentDidMount()
On Mount, get the sid from props (originally retrieved from userprofile) and populate the dropdown accordingly

**Kind**: instance method of [<code>SelectSchool</code>](#SelectSchool)  

* * *

<a name="SelectSchool+updateSchoolList"></a>

### selectSchool.updateSchoolList()
Callback for dual dropdown - Given a selected Geo, hit the API to retrieve all the schools for that Geo and populate the dropdown.

**Kind**: instance method of [<code>SelectSchool</code>](#SelectSchool)  

* * *

<a name="ShareDirectLink"></a>

## ShareDirectLink
Popover Component for sharing a link to a students project/codeblock. Copies url to clipboard.

**Kind**: global class  

* * *

<a name="ShareFacebookLink"></a>

## ShareFacebookLink
Component for sharing facebook links. Due to the fact that xvfb screenshots require a few seconds to render, 
this component receives a "screenshotReady" prop from the embedding component, which waits a few seconds 
to ensure that Facebook's FIRST capture of the page has the finished screenshot

**Kind**: global class  

* * *

<a name="SignupForm"></a>

## SignupForm
Sister component to AuthForm, this component wraps the Canon "signup" action and does appropriate error checking

**Kind**: global class  

* * *

<a name="SignupForm+onSubmit"></a>

### signupForm.onSubmit()
When the user clicks submit, verify some info before calling datawheel-canon's `signup` action

**Kind**: instance method of [<code>SignupForm</code>](#SignupForm)  

* * *

<a name="InputCode"></a>

## InputCode
InputCode is a slide type that requires the student to complete a coding test
The CodeEditor component is embedded with a series of rules, and the slide will 
not unblock until the student submits a passing code section. It is mostly a wrapper
for CodeEditor, with some controls to execute controls or unblock a slide.

**Kind**: global class  

* [InputCode](#InputCode)
    * [.componentDidMount()](#InputCode+componentDidMount)
    * [.componentDidUpdate()](#InputCode+componentDidUpdate)
    * [.setExecState()](#InputCode+setExecState)
    * [.submitAnswer()](#InputCode+submitAnswer)
    * [.resetAnswer()](#InputCode+resetAnswer)
    * [.attemptReset()](#InputCode+attemptReset)
    * [.executeCode()](#InputCode+executeCode)


* * *

<a name="InputCode+componentDidMount"></a>

### inputCode.componentDidMount()
Retrieve the rules and starting code from props and put them into state

**Kind**: instance method of [<code>InputCode</code>](#InputCode)  

* * *

<a name="InputCode+componentDidUpdate"></a>

### inputCode.componentDidUpdate()
If the user changes slides, update the rules

**Kind**: instance method of [<code>InputCode</code>](#InputCode)  

* * *

<a name="InputCode+setExecState"></a>

### inputCode.setExecState()
The Embedded CodeEditor itself knows whether the student has written any javascript
in the editor window. Dynamically show and hide an "execute" button based on this
callback function

**Kind**: instance method of [<code>InputCode</code>](#InputCode)  

* * *

<a name="InputCode+submitAnswer"></a>

### inputCode.submitAnswer()
Attempt to submit the current code state on click. Requires reaching into the 
wrapped CodeEditor instance itself to call a public function, isPassing,
which is managed by the CodeEditor. If the student passes, inform the parent 
Slide component that this slide is unblocked and the student can continue

**Kind**: instance method of [<code>InputCode</code>](#InputCode)  

* * *

<a name="InputCode+resetAnswer"></a>

### inputCode.resetAnswer()
Reset CodeEditor to original testing state, again by reaching into the CodeEditor 
instance itself and setting contents via a public method.

**Kind**: instance method of [<code>InputCode</code>](#InputCode)  

* * *

<a name="InputCode+attemptReset"></a>

### inputCode.attemptReset()
Display Are you sure? Dialog

**Kind**: instance method of [<code>InputCode</code>](#InputCode)  

* * *

<a name="InputCode+executeCode"></a>

### inputCode.executeCode()
Reach into the codeEditor and trigger javascript execution.

**Kind**: instance method of [<code>InputCode</code>](#InputCode)  

* * *

<a name="Quiz"></a>

## Quiz
Quiz is a blocking multiple-choice question, powered by the quizjson column in the slides db

**Kind**: global class  

* [Quiz](#Quiz)
    * [.onChooseAnswer()](#Quiz+onChooseAnswer)
    * [.componentDidMount()](#Quiz+componentDidMount)
    * [.componentDidUpdate()](#Quiz+componentDidUpdate)


* * *

<a name="Quiz+onChooseAnswer"></a>

### quiz.onChooseAnswer()
Callback for clicking an answer. Check ths JSON, and unblock the parent Slide if correct

**Kind**: instance method of [<code>Quiz</code>](#Quiz)  

* * *

<a name="Quiz+componentDidMount"></a>

### quiz.componentDidMount()
On Mount, populate the quiz prompt from props

**Kind**: instance method of [<code>Quiz</code>](#Quiz)  

* * *

<a name="Quiz+componentDidUpdate"></a>

### quiz.componentDidUpdate()
When the user changes slides, update the quizjson in state.

**Kind**: instance method of [<code>Quiz</code>](#Quiz)  

* * *

<a name="RenderCode"></a>

## RenderCode
RenderCode is similar to InputCode, but the CodeEditor is in readonly mode
For showing code examples with explanations.

**Kind**: global class  

* [RenderCode](#RenderCode)
    * [.setExecState()](#RenderCode+setExecState)
    * [.executeCode()](#RenderCode+executeCode)


* * *

<a name="RenderCode+setExecState"></a>

### renderCode.setExecState()
Callback for CodeEditor, when it reports that the student is using javascript,
show an exec button on this slide.

**Kind**: instance method of [<code>RenderCode</code>](#RenderCode)  

* * *

<a name="RenderCode+executeCode"></a>

### renderCode.executeCode()
When the execute button is clicked, pass the command down to the public method in CodeEditor

**Kind**: instance method of [<code>RenderCode</code>](#RenderCode)  

* * *

<a name="TextImage"></a>

## TextImage
TextImage is text left, image right. Images are stored in /slide_images/{id}.jpg
Images are uploaded through the CMS and a translated version is chosen here via locales

**Kind**: global class  

* * *

<a name="Thread"></a>

## Thread
A thread is the top-level child of a Discussion. Discussions have many threads, threads have many comments.

**Kind**: global class  

* [Thread](#Thread)
    * [.componentDidMount()](#Thread+componentDidMount)
    * [.newComment()](#Thread+newComment)
    * [.handleReport()](#Thread+handleReport)


* * *

<a name="Thread+componentDidMount"></a>

### thread.componentDidMount()
On Mount, retrieve the thread from props

**Kind**: instance method of [<code>Thread</code>](#Thread)  

* * *

<a name="Thread+newComment"></a>

### thread.newComment()
A thread can only have one text window open at a time for a new comment to be added. Keep the details of
this comment in state, and post it to the endpoint on submit

**Kind**: instance method of [<code>Thread</code>](#Thread)  

* * *

<a name="Thread+handleReport"></a>

### thread.handleReport()
A report, handled by the sub-component ReportBox, uses this callback to tell Thread that the user has submitted a report

**Kind**: instance method of [<code>Thread</code>](#Thread)  

* * *

<a name="UserCard"></a>

## UserCard
UserCard is a component used on a profile page to display other users that share the logged in user's school or location

**Kind**: global class  

* * *

<a name="About"></a>

## About
About page - contains translated about text and a simple photoslide component from Datawheel's first visit to Minas

**Kind**: global class  

* * *

<a name="Contest"></a>

## Contest
Contest Component handles the (currently postponed) contest, including all the steps and checks to ensure eligibility.
Page is public-facing (doesn't require login) to gain attention - the first step is creating an account

**Kind**: global class  

* [Contest](#Contest)
    * [.componentDidMount()](#Contest+componentDidMount)
    * [.determineStep()](#Contest+determineStep)


* * *

<a name="Contest+componentDidMount"></a>

### contest.componentDidMount()
On mount, load the user, their progress, and their projects. Use this data to populate state and fill in the 
appropriate steps on the page

**Kind**: instance method of [<code>Contest</code>](#Contest)  

* * *

<a name="Contest+determineStep"></a>

### contest.determineStep()
Signing up for the contest is a multi-step progress - use the state to determine where the user is
so the boxes on the page can be checked accordingly.

**Kind**: instance method of [<code>Contest</code>](#Contest)  

* * *

<a name="Glossary"></a>

## Glossary
The Glossary component retrieves words 
It is worth noting that the storage of glossary words is somewhat split-brained. Here in Glossary.jsx, canon's "need" functionality
is used to ensure that words are rendered server-side and therefore indexable by search engines. However, glossary words used to live 
in the Redux Store (and in QuillWrapper, this is still how they are loaded). Both places use the same API endpoint - but one 
uses canon needs, the other puts the data into redux in App.jsx's mount method.

**Kind**: global class  

* * *

<a name="Home"></a>

## Home
Homepage component - mostly a wrapper for other smaller components (cards, features, etc)

**Kind**: global class  

* * *

<a name="Home+componentDidMount"></a>

### home.componentDidMount()
On mount, fetch the users progress so that a "continue your adventure" placard can be shown.
Whether the user is logged or not, fetch the featured cb/projects

**Kind**: instance method of [<code>Home</code>](#Home)  

* * *

<a name="Level"></a>

## Level
Main Level-viewing component (e.g., Jungle Island). It shows a list of the levels available as well as the ending codeblock test.
Codeblocks by other users are listed underneath the island

**Kind**: global class  

* [Level](#Level)
    * [.loadFromDB()](#Level+loadFromDB)
    * [.maybeTriggerCodeblock()](#Level+maybeTriggerCodeblock)
    * [.componentDidUpdate()](#Level+componentDidUpdate)
    * [.componentDidMount()](#Level+componentDidMount)
    * [.componentWillUnmount()](#Level+componentWillUnmount)
    * [.toggleTest()](#Level+toggleTest)
    * [.handleSave()](#Level+handleSave)
    * [.onFirstCompletion()](#Level+onFirstCompletion)
    * [.closeOverlay()](#Level+closeOverlay)
    * [.hasUserCompleted()](#Level+hasUserCompleted)
    * [.reportLike()](#Level+reportLike)
    * [.allLevelsBeaten()](#Level+allLevelsBeaten)
    * [.promptFinalTest()](#Level+promptFinalTest)
    * [.saveCheckpoint()](#Level+saveCheckpoint)
    * [.skipCheckpoint()](#Level+skipCheckpoint)
    * [.buildCheckpointPopover()](#Level+buildCheckpointPopover)
    * [.buildWinPopover()](#Level+buildWinPopover)
    * [.buildTestPopover()](#Level+buildTestPopover)


* * *

<a name="Level+loadFromDB"></a>

### level.loadFromDB()
On Mount, or Update (meaning the user switched islands) Load the necessary progress/codeblock data from the db.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+maybeTriggerCodeblock"></a>

### level.maybeTriggerCodeblock()
The presence of `/show` in the URL is a permalink to open the codeblock. Was originally intended so that codeblockcards could directly link
to a user's own codeblock and automatically open it, but this feature was postponed.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+componentDidUpdate"></a>

### level.componentDidUpdate()
When the user changes pages, flush the state and reload from the database

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+componentDidMount"></a>

### level.componentDidMount()
The code to load from DB already exists in ComponentDidUpdate, this dedupes that logic by just manually calling update on mount.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+componentWillUnmount"></a>

### level.componentWillUnmount()
A timeout is registered on Codeblock completion to process the screenshot, ensuring that it is complete before allowing fb sharing.
Clear this timeout if the user leaves the page

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+toggleTest"></a>

### level.toggleTest()
Hide or Show the codeblock test popover. Adjust the URL accordingly

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+handleSave"></a>

### level.handleSave()
Callback for CodeBlockEditor on save. The CodeBlockEditor passes its codeblock back out to Level so that its
Codeblock can be set.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+onFirstCompletion"></a>

### level.onFirstCompletion()
Called when the user finishes an island for the first time. Calls a refresh on the data
to unlock codeblocks, shows the victory message, and invites the user to the next island.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+closeOverlay"></a>

### level.closeOverlay()
Upon Closing the winning pop-up, send the player to the next island.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+hasUserCompleted"></a>

### level.hasUserCompleted()
Levels and Islands are mixed together in a single array - so this can be used to test if
a user has beaten a level (e.g. hello-world) or an entire island (e.g. island-1).

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+reportLike"></a>

### level.reportLike()
The codeblocks underneath the island need to be informed via a callback when they are 
liked or unliked, as this affects the sorting.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+allLevelsBeaten"></a>

### level.allLevelsBeaten()
Used to determine if the final test should be shown.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+promptFinalTest"></a>

### level.promptFinalTest()
If a user has beaten all the levels on this island, but has NOT created a codeblock yet,
they are in the state were the codeblock need be prompted

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+saveCheckpoint"></a>

### level.saveCheckpoint()
Checkpoint is a pop-up that appears after level 1, asking the user to share their
school. This is the api callback to update their profile

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+skipCheckpoint"></a>

### level.skipCheckpoint()
If the user elects not to provide their school, write a hard-coded -1 to their sid.
This saves the "prefer not to answer" choice and prevents future popups.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+buildCheckpointPopover"></a>

### level.buildCheckpointPopover()
This was written early in the project, before the Component nesting of React was 
fully put to use. This method encapsulates the checkpoint popover - but this should
obviously be moved to a component, not a method.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+buildWinPopover"></a>

### level.buildWinPopover()
This was written early in the project, before the Component nesting of React was 
fully put to use. This method encapsulates the "You Win" popover - but this should
obviously be moved to a component, not a method.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Level+buildTestPopover"></a>

### level.buildTestPopover()
This was written early in the project, before the Component nesting of React was 
fully put to use. This method encapsulates the test popover - but this should
obviously be moved to a component, not a method.

**Kind**: instance method of [<code>Level</code>](#Level)  

* * *

<a name="Island"></a>

## Island
Displays all available islands

**Kind**: global class  

* [Island](#Island)
    * [.componentDidMount()](#Island+componentDidMount)
    * [.hasUserCompleted(milestone)](#Island+hasUserCompleted) ⇒ <code>Boolean</code>


* * *

<a name="Island+componentDidMount"></a>

### island.componentDidMount()
On mount, fetch the progress for the currently logged in user.

**Kind**: instance method of [<code>Island</code>](#Island)  

* * *

<a name="Island+hasUserCompleted"></a>

### island.hasUserCompleted(milestone) ⇒ <code>Boolean</code>
On mount, fetch the progress for the currently logged in user.

**Kind**: instance method of [<code>Island</code>](#Island)  
**Returns**: <code>Boolean</code> - Returns a boolean whether or not the user has completed the provided island ID.  

| Param | Type | Description |
| --- | --- | --- |
| milestone | <code>String</code> | An island ID. |


* * *

<a name="Leaderboard"></a>

## Leaderboard
Leaderboard is a sortable table that lists users by their in-game progress.

**Kind**: global class  

* [Leaderboard](#Leaderboard)
    * [.componentDidMount()](#Leaderboard+componentDidMount)
    * [.handleHeaderClick()](#Leaderboard+handleHeaderClick)


* * *

<a name="Leaderboard+componentDidMount"></a>

### leaderboard.componentDidMount()
On Mount, retrieve stats from the API, calculate what percentage of completion this refers
to, given the state of currently released islands, and update state.

**Kind**: instance method of [<code>Leaderboard</code>](#Leaderboard)  

* * *

<a name="Leaderboard+handleHeaderClick"></a>

### leaderboard.handleHeaderClick()
On selection of a sorting property, sort the users accordingly

**Kind**: instance method of [<code>Leaderboard</code>](#Leaderboard)  

* * *

<a name="LearnMore"></a>

## LearnMore
Simple partners page to link to other online coding projects

**Kind**: global class  

* * *

<a name="LessonPlan"></a>

## LessonPlan
A public-facing listing of all slides and quizzes, to be used by teachers as a lesson plan,
students as a reference guide, and to aid in directing users to the site via search engines.
Lesson plan uses Canon's "Needs" to render the page serverside, so that the page is indexable
by SEO bots

**Kind**: global class  

* * *

<a name="Profile"></a>

## Profile
Class component for a user profile.
This is a public page and meant to be shared.
If a user is logged in AND this is their profile, show an
edit button allowing them to edit it.

**Kind**: global class  

* [Profile](#Profile)
    * [new Profile(loading, error, profileUser)](#new_Profile_new)
    * [.componentDidMount()](#Profile+componentDidMount)
    * [.render()](#Profile+render)


* * *

<a name="new_Profile_new"></a>

### new Profile(loading, error, profileUser)
Creates the Profile component with its initial state.


| Param | Type | Description |
| --- | --- | --- |
| loading | <code>boolean</code> | true by defaults gets flipped post AJAX. |
| error | <code>string</code> | Gets set if no username matches username URL param. |
| profileUser | <code>object</code> | Gets set to full user object from DB. |


* * *

<a name="Profile+componentDidMount"></a>

### profile.componentDidMount()
Grabs username from URL param, makes AJAX call to server and sets error
state (if no user is found) or profileUser (if one is).

**Kind**: instance method of [<code>Profile</code>](#Profile)  

* * *

<a name="Profile+render"></a>

### profile.render()
3 render states:
case (loading)
 - show loading
case (error)
 - show error msg from server
case (user found)
 - user info

**Kind**: instance method of [<code>Profile</code>](#Profile)  

* * *

<a name="UserCodeBlocks"></a>

## UserCodeBlocks
Class component for displaying lists of user's snippets.
This is shown on the public profile for a user and requires sending
1 prop: a ref to the user

**Kind**: global class  

* [UserCodeBlocks](#UserCodeBlocks)
    * [new UserCodeBlocks(loading, snippets)](#new_UserCodeBlocks_new)
    * [.componentDidMount()](#UserCodeBlocks+componentDidMount)


* * *

<a name="new_UserCodeBlocks_new"></a>

### new UserCodeBlocks(loading, snippets)
Creates the UserSnippets component with initial state.


| Param | Type | Description |
| --- | --- | --- |
| loading | <code>boolean</code> | true by defaults gets flipped post AJAX. |
| snippets | <code>array</code> | Gets set by AJAX call from DB call. |


* * *

<a name="UserCodeBlocks+componentDidMount"></a>

### userCodeBlocks.componentDidMount()
Grabs user id from user prop, makes AJAX call to server and returns
the list of snippets.

**Kind**: instance method of [<code>UserCodeBlocks</code>](#UserCodeBlocks)  

* * *

<a name="UserProjects"></a>

## UserProjects
Class component for displaying lists of user's projects.
This is shown on the public profile for a user and requires sending
1 prop: a ref to the user

**Kind**: global class  

* [UserProjects](#UserProjects)
    * [new UserProjects(loading, projects)](#new_UserProjects_new)
    * [.componentDidMount()](#UserProjects+componentDidMount)


* * *

<a name="new_UserProjects_new"></a>

### new UserProjects(loading, projects)
Creates the UserProjects component with initial state.


| Param | Type | Description |
| --- | --- | --- |
| loading | <code>boolean</code> | true by defaults gets flipped post AJAX. |
| projects | <code>array</code> | Gets set by AJAX call from DB call. |


* * *

<a name="UserProjects+componentDidMount"></a>

### userProjects.componentDidMount()
Grabs user id from user prop, makes AJAX call to server and returns
the list of projects.

**Kind**: instance method of [<code>UserProjects</code>](#UserProjects)  

* * *

<a name="UsersList"></a>

## UsersList
Class component for displaying lists of user's snippets.
This is shown on the public profile for a user and requires sending
1 prop: a ref to the user

**Kind**: global class  

* [UsersList](#UsersList)
    * [new UsersList(loading, snippets)](#new_UsersList_new)
    * [.componentDidMount()](#UsersList+componentDidMount)


* * *

<a name="new_UsersList_new"></a>

### new UsersList(loading, snippets)
Creates the UserSnippets component with initial state.


| Param | Type | Description |
| --- | --- | --- |
| loading | <code>boolean</code> | true by defaults gets flipped post AJAX. |
| snippets | <code>array</code> | Gets set by AJAX call from DB call. |


* * *

<a name="UsersList+componentDidMount"></a>

### usersList.componentDidMount()
Grabs user id from user prop, makes AJAX call to server and returns
the list of snippets.

**Kind**: instance method of [<code>UsersList</code>](#UsersList)  

* * *

<a name="Projects"></a>

## Projects
Projects is one of the largest Pages in codelife - It is responsible for all CRUD
operations of projects, processing screenshots, and listing user codeblocks for inspiration.
Longer term, this should be refactored into smaller components.

**Kind**: global class  

* [Projects](#Projects)
    * [.componentDidMount()](#Projects+componentDidMount)
    * [.openProject()](#Projects+openProject)
    * [.setExecState()](#Projects+setExecState)
    * [.createNewProject()](#Projects+createNewProject)
    * [.clickNewProject()](#Projects+clickNewProject)
    * [.shareProject()](#Projects+shareProject)
    * [.showLeaveAlert()](#Projects+showLeaveAlert)
    * [.leaveCollab()](#Projects+leaveCollab)
    * [.handleCheckbox()](#Projects+handleCheckbox)
    * [.deleteProject()](#Projects+deleteProject)
    * [.onClickProject()](#Projects+onClickProject)
    * [.saveCodeToDB()](#Projects+saveCodeToDB)
    * [.closeFirstTimeShare()](#Projects+closeFirstTimeShare)
    * [.executeCode()](#Projects+executeCode)
    * [.handleFork()](#Projects+handleFork)
    * [.changeProjectName()](#Projects+changeProjectName)
    * [.handleKey()](#Projects+handleKey)


* * *

<a name="Projects+componentDidMount"></a>

### projects.componentDidMount()
On Mount, retrieve all projects by the logged in user, as well as the projects by OTHER users
with whom the logged in user is listed as a collaborator, and put these in state.

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+openProject"></a>

### projects.openProject()
Given a project id, open the project itself by fetching it from the database and loading it
into state. Set the URL so it continues to match the open project permalink

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+setExecState"></a>

### projects.setExecState()
The embedded CodeEditor is the only component that knows if the user has used javascript
in their project. When this changes in CodeEditor, it bubbles that up via this callback
so that Projects can dynamically show and hide an "Execute Code" button

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+createNewProject"></a>

### projects.createNewProject()
Callback for the create new project button. Trims the name of URL-breakers and whitespace,
posts an empty project to the API endpoint, and refreshes the project list from that API
payload so the Project List accurately reflects the new project collection. Update the URL
when the project is finished opening.

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+clickNewProject"></a>

### projects.clickNewProject()
Opens the popover to name the project (which eventually calles createNewProject)

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+shareProject"></a>

### projects.shareProject()
Deprecated / unused function

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+showLeaveAlert"></a>

### projects.showLeaveAlert()
The alerts in this component have two states, false, or "truthy," that is, leaveAlert=false
means that the window closed, and setting leaveAlert to *what you want the alert to say* 
makes it truthy, and therefore open. This click callback is the "are you sure" dialogue
for leaving a collaboration

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+leaveCollab"></a>

### projects.leaveCollab()
Upon confirming that this user wants to leave a collab, remove that user from
the collabs tabel. Additionally, filter it out in state. Either way, close the 
leaveAlert

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+handleCheckbox"></a>

### projects.handleCheckbox()
Though users are normally invited to share new projects on facebook, they may elect to 
opt out and "never show this again" which needs to write to their userprofile

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+deleteProject"></a>

### projects.deleteProject()
Delete a given project. The argument here is confusing - originally clicking delete would
delete the project immediately. The addition of a deleteAlert (similar to leaveAlert) stores
the project to be deleted in the deleteAlert.

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+onClickProject"></a>

### projects.onClickProject()
When a user clicks a project, attempt to open it. Reach into the CodeEditor and check 
if changes have been made, and if so, block the opening attempt until they save.

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+saveCodeToDB"></a>

### projects.saveCodeToDB()
Prepare a payload containing the filename, id, content, etc to be sent to the update api.
If this is the first time the user is saving a project, offer to share it on Facebook.
Note that this is one of the many places in Codelife where a 5 second timer is used to allow
the screenshot time to process

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+closeFirstTimeShare"></a>

### projects.closeFirstTimeShare()
Callback for closing the share window, save the users preference if they asked 
not to be asked again.

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+executeCode"></a>

### projects.executeCode()
Reach into the CodeEditor and call the executeCode function. This requires manual 
execution - otherwise if the user was writing something like "alert()" then it would 
render every single keystroke

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+handleFork"></a>

### projects.handleFork()
On most parts of the site, forking a codeblock is as easy as creating the project
and navigating the user to that page. However, if a user forks a codeblock from HERE
on the project page, a slightly different behavior is required

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+changeProjectName"></a>

### projects.changeProjectName()
Rename a project. Set title editability to false temporarily and prune URL-breakers
and leading/trailing whitespace from the new name. Write the project to the db and update state

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="Projects+handleKey"></a>

### projects.handleKey()
Keyboard callbacks

**Kind**: instance method of [<code>Projects</code>](#Projects)  

* * *

<a name="ResetPw"></a>

## ResetPw
Very small wrapper class for PasswordReset Component

**Kind**: global class  

* * *

<a name="Share"></a>

## Share
The Share Page is a top-level page that does not require login, enabling users to share
their projects or codeblocks on facebook or with others. It looks up the content via name/user
and renders a fullscreen codeeditor for display, essentially acting as a hosting page for 
the students' work. Show a Report bar on the bottom for logged in users to report inappropriate content

**Kind**: global class  

* [Share](#Share)
    * [.componentDidMount()](#Share+componentDidMount)
    * [.handleReport()](#Share+handleReport)


* * *

<a name="Share+componentDidMount"></a>

### share.componentDidMount()
In order to color the ReportBox Button appropriate, it needs to be known if the logged 
in user has reported this content. Fetch the reports to check.

**Kind**: instance method of [<code>Share</code>](#Share)  

* * *

<a name="Share+handleReport"></a>

### share.handleReport()
The ReportBox component needs a callback to tell this outer component that a report
has been processed.

**Kind**: instance method of [<code>Share</code>](#Share)  

* * *

<a name="Slide"></a>

## Slide
The slide component is the wrapper for all the various slidetypes in Codelife. However, 
it interacts a great deal with the db and greater site, as reaching the last slide 
updates user progress, and each slide has a Discussion board beneath it. It's important
to note that currently a Level must be beaten all at once - the "latestSlideCompleted" 
variable in state is not persisted anywhere, and leaving the lesson does not restart the
user halfway through a level. Longer term, more granular tracking of user location would
be a nice enhancement.

**Kind**: global class  

* [Slide](#Slide)
    * [.unblock()](#Slide+unblock)
    * [.saveProgress()](#Slide+saveProgress)
    * [.componentDidUpdate()](#Slide+componentDidUpdate)
    * [.componentDidMount()](#Slide+componentDidMount)
    * [.hitDB()](#Slide+hitDB)
    * [.editSlide()](#Slide+editSlide)
    * [.advanceLevel()](#Slide+advanceLevel)
    * [.toggleSkip()](#Slide+toggleSkip)
    * [.toggleDiscussion()](#Slide+toggleDiscussion)
    * [.onNewThread()](#Slide+onNewThread)


* * *

<a name="Slide+unblock"></a>

### slide.unblock()
InputCode and Quiz slides are "blockers" in that they do not allow progress until a correct
answer is provided. This function is called when the user beats a slide.

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Slide+saveProgress"></a>

### slide.saveProgress()
When the user reaches the final slide, write the level to the userprogress table.
If the user looks at the discussion board, this level is marked as "skipped", which
ultimately does not count towards overall completion%. Completing the level without
help marks the level as completed.

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Slide+componentDidUpdate"></a>

### slide.componentDidUpdate()
Slide.jsx handles all the transitions from slide to slide, so a lot of work need be done
when the user changes slides. The simplest case is beating a single slide, but they also
may have beaten this lesson (db write), reached a blocking slide, or be changing levels entirely

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Slide+componentDidMount"></a>

### slide.componentDidMount()
On mount, hit the DB and add the keyboard listener

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Slide+hitDB"></a>

### slide.hitDB()
Given the island / level / slide (lid, mlid, sid) from the URL params
Fetch the slides and userprogress from the db and start from the first slides

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Slide+editSlide"></a>

### slide.editSlide()
Admin-only direct link to the CMS to edit a slide's content

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Slide+advanceLevel"></a>

### slide.advanceLevel()
When the user goes to the next level, push the new URL and hard-reload. This should 
be refactored to a more React-y state reset.

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Slide+toggleSkip"></a>

### slide.toggleSkip()
Show or hide the "show discussion" confirm/deny menu

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Slide+toggleDiscussion"></a>

### slide.toggleDiscussion()
Reveal or hide the discussion component.

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Slide+onNewThread"></a>

### slide.onNewThread()
When a Discussion board posts a new thread, Slide needs to know this has happened.
This callback pushes the new thread onto the list so the "thread count" updates

**Kind**: instance method of [<code>Slide</code>](#Slide)  

* * *

<a name="Splash"></a>

## Splash
Simple splash page that lists about text for the Codelife Project

**Kind**: global class  

* * *

<a name="Survey"></a>

## Survey
Completed/Deprecated Survey Module from a 2017 Survey that followed a beta test in 
Minas Gerais. Consists of Radio buttons and a DB post.

**Kind**: global class  

* * *

<a name="Survey+componentWillMount"></a>

### survey.componentWillMount()
Grabs username from URL param, makes AJAX call to server and sets error
state (if no user is found) or overrides state (if one is).

**Kind**: instance method of [<code>Survey</code>](#Survey)  

* * *

<a name="threadInclude"></a>

## threadInclude
threadsRoute is used for retrieving threads and their associated comments.
Unlike islands, likes, and many of the other earlier data structures in development,
threads make better use of Sequelize associations, implicitly including comments in the
thread payloads they belong to. This is distinctly different from islands/levels/slides,
which get entire lists from the tables and then compile them client side. Going forward,
the hierarchical/sequelize-association method of delivering API data (without flattening)
is the more correct one.
Threads have entity_ids and types. Currently the only two types are comments and threads,
however the intention was that discussions could expand to encompass projects/codeblocks or more

**Kind**: global constant  

* * *

<a name="cvMatch"></a>

## cvMatch
Given a rule and a block of code, check the Javascript and perform an exact match
check on the regex. Used for things like "code must contain getElementById"

**Kind**: global constant  

* * *

<a name="cvNests"></a>

## cvNests
Given a rule and a block of code, check that a given tag is nested inside another
tag. Used for things like "html nests body." Note that this does not currently
account for subsequent occurences (only checks for first occurences)

**Kind**: global constant  

* * *

<a name="cvUses"></a>

## cvUses
Given a rule and a block of code, use a hard-coded regex to check for a SPECIFIC
pattern. Example include a for block "for (;;) {}", ifelse "if () {} else {}"
or a generic invocation of a function "functionName(){}"

**Kind**: global constant  

* * *

<a name="attrCount"></a>

## attrCount
Given a needle (like h1), an attribute (like color), a value (like red), and a JSON
representation of the code as prepared by himalaya (HTML parser), recursively climb
down the nested json tree, testing at each node for the presence of the needle,
and if provided, whether that node has an attribute, and, if provided, whether that 
attribute's value exactly matches the provided value.

**Kind**: global constant  

* * *

<a name="cvContainsSelfClosingTag"></a>

## cvContainsSelfClosingTag
Given a rule and a block of code, search for a self closing tag such as <img />
Optionally run attrCount to check for extra rules (such as requiring "src")

**Kind**: global constant  

* * *

<a name="cvContainsOne"></a>

## cvContainsOne
Given a rule and a block of code, ensure that the given needle (such as <html>)
occurs once and only once in the code (useful for tags like body, head, html)

**Kind**: global constant  

* * *

<a name="cvContainsTag"></a>

## cvContainsTag
Given a rule and a block of code, check if a given tag (such as <p>) is included in the 
code. Optionally, use attrCount to match any provided attributes or values in the rule.

**Kind**: global constant  

* * *

<a name="cvContainsStyle"></a>

## cvContainsStyle
Given a rule and a block of code, using the "css" module to turn the css into a crawlable
object. Fold over that generated parsed object and drill down to check if the rule's property
matches the property and value of the css entered by the student.

**Kind**: global constant  

* * *

<a name="flattenCodeBlock"></a>

## flattenCodeBlock(user, cb) ⇒ <code>Object</code>
Given the logged-in user and a codeblock, this function "flattens" the object by reaching
into the associated tables queries (such as reports and likes) and bubbling them up to a top-level prop
This type of function is really only used here and in projectsRoute.  As codelife development progressed,
the pattern shifted more to expect the nested nature of sequelize queries, meaning flattening wasn't necessary.

**Kind**: global function  
**Returns**: <code>Object</code> - The "flattened" codeblock, ready to be returned to the requester  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> | The currently logged in user, as specified by datawheel-canon |
| cb | <code>Object</code> | The codeblock to flatten |


* * *

<a name="strip"></a>

## strip()
This route is specifically for the canon "needs" version of the glossary
It has a lang switch because the glossary needs to be rendered server side
for SEO optimization.

**Kind**: global function  

* * *

<a name="flattenProfile"></a>

## flattenProfile(user, p)
Similar to codeblocksroute, earlier in the project a lot of work was done to keep 
the payloads returned by APIs as flat objects. Later routes trended more towards trusting
sequelize to form the hierarchy via associations. This helper function bubbles up associations
into top-level properties.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | The logged in user |
| p | <code>Object</code> | the profile to flatten |


* * *

<a name="flattenProject"></a>

## flattenProject(user, p) ⇒ <code>Object</code>
Given the logged-in user and a project, this function "flattens" the object by reaching
into the associated tables queries (such as reports and likes) and bubbling them up to a top-level prop
This type of function is really only used here and in codeblocksroute.  As codelife development progressed,
the pattern shifted more to expect the nested nature of sequelize queries, meaning flattening wasn't necessary.

**Kind**: global function  
**Returns**: <code>Object</code> - The "flattened" project, ready to be returned to the requester  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>string</code> | The currently logged in user, as specified by datawheel-canon |
| p | <code>Object</code> | The project to flatten |


* * *

<a name="pruneThread"></a>

## pruneThread(user, t) ⇒ <code>Object</code>
Given a user and a thread, prepare the thread to be returned to the requester.
This involves a number of operations, including collating likes and reports, rewriting
banned content, and deleting certain sensitive keys so they don't leak out through the API

**Kind**: global function  
**Returns**: <code>Object</code> - the pruned thread  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Object</code> | The logged-in user |
| t | <code>Object</code> | the Thread to be pruned |


* * *

