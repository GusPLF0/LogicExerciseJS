//Script to compare, based on an image metric, whether you have a portrait or landscape image format

landtrait = (width, height) => (height<width)?"LandScape":"Portrait";

console.log(landtrait(1080,1920));