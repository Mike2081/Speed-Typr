import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Page.scss';



export default class Page extends Component {
    constructor(){
        super();
        this.input = React.createRef();
        this.state = { 
            words:[
            'chop',
            'smelly',
            'untidy',
            'selection',
            'letter',
            'friction',
            'guess',
            'middle',
            'sister',
            'zealous',
            'tense',
            'precede',
            'cherry',
            'fantastic',
            'steady',
            'wine',
            'hurry',
            'previous',
            'practice',
        ],
            input: '',
            score:0,
            count: 20
        }
    };
    handleChange = (e) =>{
        this.setState({
            input:e.target.value
        })
    };
    clearInput= () => {
        this.setState({
            input:''
        })
    };
    handlekey = (e) => {
        e.preventDefault()
        let inputWord = this.input.current.value;
        console.log(inputWord);
        let newArray = this.state.words.filter(e => e !== inputWord);
            this.setState({
                    words: newArray, 
                }) 
                this.clearInput();

              console.log(newArray)  
        if(this.state.words.indexOf(inputWord) > -1){
            this.setState({
                score: this.state.score+1,
            })
        }       
    };



    componentDidMount () {
        this.setState({
          count: this.state.count
        })
        this.doIntervalChange()
       
      }
      doIntervalChange = () => {
        
        this.interval = setInterval(
            () => {
              if(this.state.count > 0) {
                this.setState(prevState => ({
                  count: prevState.count - 1
                }))
              } else {
                clearInterval(this.interval)
                alert('GAME OVER' + '                                                                            ' + 'SCORE:' + this.state.score)
              }
            },
            1000
          )
    
      }

      componentWillUnmount () {
        clearInterval(this.interval)
      };
    render() {      
    return (
      <div className='container'>
        {this.state.words.map(item =>{
            return <h1 className = {item}>
                        {item}
                    </h1>

        })}
        <div className='score'>
            Score:{this.state.score}
        </div>
        <div className='timer'>
            Timer:{this.state.count}
        </div>
        <form className='search' onSubmit={(event)=>this.handlekey(event)} onChange={this.handleChange}>
            <input className = 'textBar' type ="reset" type='text' ref={this.input} value={this.state.input} />
        </form>
        <Link to={'/start'}>
            <button className='retry'>Try again</button>
        </Link>
        <div className='back'>

        </div>
      </div>
    )
  }
}




