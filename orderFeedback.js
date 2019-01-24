


constructor(props){
        super(props);
        this.handleClickLike = this.handleClickLike.bind(this)
        this.handleClickDislike = this.handleClickDislike.bind(this)
        this.state = {
          counterLikes : props.likes,
          counterDislikes: props.dislikes,
          liked : false,
          disliked : false,
          total : props.likes + props.dislikes,
        };
    }

    handleClickLike = () => {

        if(!this.state.disliked) {
            this.setState({
            liked : !this.state.liked,
            })    
        } else {
            this.setState({
            liked : true,
            disliked : false,
            counterLikes : this.state.counterLikes + 1,
            counterDislikes : this.state.counterDislikes - 1,
            total : this.state.counterLikes + this.state.counterDislikes + 1
            });
        }
    }

    handleClickDislike = () => {
        if(!this.state.liked) {    this.setState({
            disliked : !this.state.dislike
            })    
        } else {
            this.setState({
            liked : false,
            disliked : true,
            counterLikes : this.state.counterLikes - 1, 
            counterDislikes: this.state.counterDislikes + 1,
            total : this.state.counterLikes + this.state.counterDislikes + 1
            });
        }
    }

    render() {

        return (

            <div className="likeDislikeContainer">

                <form>

                    <div className="likeDislike">

                        <span>
                        {this.state.liked ? this.state.counterLikes : this.state.counterLikes}
                        </span>
                        <button
                        type="button"
                        id={this.props.id}
                        onClick={this.handleClickLike}
                        value="likes"
                        >Like</button>

                    </div>

                    <div className="likeDislike">

                        <span>
                        {this.state.disliked ? this.state.counterDislikes : this.state.counterDislikes}
                        </span>                        
                        <button
                        type="button"
                        id={this.props.id}
                        onClick={this.handleClickDislike}
                        value="dislike"
                        >Dislike</button>
  </div>

                </form>

                <progress max={this.state.total} value={this.state.counterLikes}/>

            </div>
        );
    }
