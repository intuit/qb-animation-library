/*
  The MIT License
  Copyright 2018 Intuit Inc.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation 
  files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, 
  modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the 
  Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

class AccordionRow extends React.Component {
  componentDidMount() {
    // can't animate from "auto", so set explicit height after mount if initially open & height is "auto"
    if (this.content.parentElement.style.height === "auto") {
      this.content.parentElement.style.height = `${this.content.clientHeight}px`;
    }
    this.rendered = true;
  }
  render() {
    let rowClass = 'accordionRow';
    if (this.props.open) { rowClass += ' open'; }
    if (this.rendered) {
      rowClass += this.props.open ? ' opening' : ' closing';  // for caret rotation animation
    }
    return (
      <div className={rowClass} onClick={this.props.toggleOpen}>
        <p>{this.props.header}</p>
        <div className="accordionContent qbal-transition-height" style={
            {height: this.props.open ? (this.content ? this.content.clientHeight : 'auto') : '0'}
        }>
          <p ref={(el)=>{this.content = el}}>
            {this.props.children}
          </p>  
        </div>
      </div>
    );
  }
}


class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      openIndex: Number.isInteger(this.props.initiallyOpenRow) ? this.props.initiallyOpenRow : null 
    };
  }
  toggleOpen = (index) => {
    if (this.state.openIndex === index) {
      this.setState({openIndex: null});
    } else {
      this.setState({openIndex: index});
    }
  };
  render() {
    return (
      <div className="accordion">
        {this.props.children.map((row, i)=> (
          React.cloneElement(row, {open: i===this.state.openIndex, key: i, toggleOpen: ()=>this.toggleOpen(i)})
        ))}
      </div>
    );
  }
}


class AccordionDemo extends React.Component {
  render() {
    return (
      <Accordion initiallyOpenRow={0}>
        <AccordionRow header={'Short content'}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam facilisis enim.
        </AccordionRow>
        <AccordionRow header={'Long content'}>
          Pellentesque in elit et lacus euismod dignissim. Aliquam dolor pede, convallis 
          eget, dictum a, blandit ac, urna. Pellentesque sed nunc ut justo volutpat egestas. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
          hymenaeos. In erat. Suspendisse potenti. Fusce faucibus nibh sed nisi. <br/><br/>
          Aliquam dolor pede, convallis eget, dictum a, blandit ac, urna. Pellentesque sed 
          nunc ut justo volutpat egestas. Class aptent taciti sociosqu ad litora torquent 
          per conubia nostra, per inceptos hymenaeos. <br/><br/>
          In erat. Suspendisse potenti. Fusce faucibus nibh sed nisi. Phasellus faucibus, dui 
          a cursus dapibus, mauris nulla euismod velit, a lobortis turpis arcu vel dui.
        </AccordionRow>
      </Accordion>
    );
  }
}


const domContainer = document.querySelector('#accordion');
ReactDOM.render(<AccordionDemo/>, domContainer);