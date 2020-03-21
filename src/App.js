import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';


class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    var sampleMarkdown = "# Welcome to Markdown Previewer!!\n";
    sampleMarkdown += "## This is a sample Markdown file. Let us look at some markdown examples...\n";
    sampleMarkdown += "You can find the code for this previewer on my github : https://github.com/nayakshweta  \n\n";
    sampleMarkdown += "Here is the command for writing hello to javascript console: \`console.log(\"hello\")\`  \n\n";
    sampleMarkdown += "Now let us look at how to write a shopping list in javascript :  \n";
    sampleMarkdown += "```\n";
    sampleMarkdown += "var myList = [  \n";
    sampleMarkdown += "\t [\"Canned Beans\", 3],  \n";
    sampleMarkdown += "\t [\"Milk Galon\", 1],  \n";
    sampleMarkdown += "\t [\"Cereal\", 2],  \n";
    sampleMarkdown += "\t [\"Toilet Paper\", 12],  \n";
    sampleMarkdown += "\t [\"Sack of Rice\", 1],  \n";
    sampleMarkdown += "```\n";
    sampleMarkdown += "Some of the essential skills for frontend development are :  \n";
    sampleMarkdown += "* CSS  \n";
    sampleMarkdown += "* Javascript  \n";
    sampleMarkdown += "* React  \n";
    sampleMarkdown += "* Html  \n\n";
    sampleMarkdown += "In my last task I wrote a random quote generator. One of the quotes was  \n";
    sampleMarkdown += "> Let there be no purpose in friendship save the deepening of the spirit.  \n";
    sampleMarkdown += "> - Khalil Gibran  \n";
    sampleMarkdown += "![Amazing](https://image.shutterstock.com/image-illustration/amazing-word-pop-art-retro-260nw-1112517635.jpg)  \n";
    sampleMarkdown += "**Hope that was helpful**";
    
    this.state = {
      text: sampleMarkdown
    };
    
    this.updateText = this.updateText.bind(this);
  }
  
  updateText(event) {
    this.setState({
      text: event.target.value
    });
  }
 
  convertToMarkdown() {
    var convertedText = marked(this.state.text);
    return {__html: convertedText};
  }

  
  render() {
    return (
      <div>
        <textarea id="editor" onChange={this.updateText}>{this.state.text}</textarea>
        <br />
        <div id="preview" dangerouslySetInnerHTML={this.convertToMarkdown()}></div>
      </div>
    );
  }
};

export default MarkdownPreviewer;
