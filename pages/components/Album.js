import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';

class Album extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images,
            selectAllChecked: false
        };

        this.onSelectImage = this.onSelectImage.bind(this);
        this.getSelectedImages = this.getSelectedImages.bind(this);
        this.onClickSelectAll = this.onClickSelectAll.bind(this);
    }

    allImagesSelected (images){
        var f = images.filter(
            function (img) {
                return img.isSelected == true;
            }
        );
        return f.length == images.length;
    }

    onSelectImage (index, image) {
        var images = this.state.images.slice();
        var img = images[index];
        if(img.hasOwnProperty("isSelected"))
            img.isSelected = !img.isSelected;
        else
            img.isSelected = true;

        this.setState({
            images: images
        });

        if(this.allImagesSelected(images)){
            this.setState({
                selectAllChecked: true
            });
        }
        else {
            this.setState({
                selectAllChecked: false
            });
        }
    }

    getSelectedImages () {
        var selected = [];
        for(var i = 0; i < this.state.images.length; i++)
            if(this.state.images[i].isSelected == true)
                selected.push(i);
        return selected;
    }

    onClickSelectAll () {
        var selectAllChecked = !this.state.selectAllChecked;
        this.setState({
            selectAllChecked: selectAllChecked
        });

        var images = this.state.images.slice();
        if(selectAllChecked){
            for(var i = 0; i < this.state.images.length; i++)
                images[i].isSelected = true;
        }
        else {
            for(var i = 0; i < this.state.images.length; i++)
                images[i].isSelected = false;

        }
        this.setState({
            images: images
        });
    }

    render () {
        return (
            <div className="col-9 mx-auto" style={{ display: "block", minHeight: "1px", overflow: "auto"}}>
                <Gallery images={this.state.images} onSelectImage={this.onSelectImage} showLightboxThumbnails={true}/>
            </div>
        );
    }
}

Album.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailWidth: PropTypes.number.isRequired,
            thumbnailHeight: PropTypes.number.isRequired,
            isSelected: PropTypes.bool
        })
    ).isRequired
};

Album.defaultProps = {
    images: [
        {
            src: require("../resources/logo.png"),
            thumbnail: require("../resources/logo.png"),
            thumbnailWidth: "10%",
            thumbnailHeight: "10%",
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: require("../resources/logo.png"),
            thumbnail: require("../resources/logo.png"),
            thumbnailWidth: "10%",
            thumbnailHeight: "10%",
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: require("../resources/logo.png"),
            thumbnail: require("../resources/logo.png"),
            thumbnailWidth: "10%",
            thumbnailHeight: "10%",
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: require("../resources/logo.png"),
            thumbnail: require("../resources/logo.png"),
            thumbnailWidth: "10%",
            thumbnailHeight: "10%",
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: require("../resources/logo.png"),
            thumbnail: require("../resources/logo.png"),
            thumbnailWidth: "10%",
            thumbnailHeight: "10%",
            caption: "After Rain (Jeshu John - designerspics.com)"
        },
        {
            src: require("../resources/logo.png"),
            thumbnail: require("../resources/logo.png"),
            thumbnailWidth: "10%",
            thumbnailHeight: "10%",
            caption: "After Rain (Jeshu John - designerspics.com)"
        }
    ]
};

export default Album
