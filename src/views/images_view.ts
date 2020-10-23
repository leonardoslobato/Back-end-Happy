import Image from '../model/Images';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://localhost:3000/uploads/${image.path}`,

    };
  },
  renderMany(images: Image[]) {
    return images.map(images => this.render(images));
  }
};
