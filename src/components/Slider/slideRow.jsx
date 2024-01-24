export default function SlideRow(images) {
  return (
    <div className="flex flex-row">
      {images.images.map((image) => (
        <div className="border-2 border-black">
          <img  src={image} width={300} height={300} />
        </div>
      ))}
    </div>
  )
}