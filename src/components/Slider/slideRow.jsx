
export default function SlideRow({image}) {
  return (
    <div className="flex flex-row">
        <div className="border-2 border-black">
          <img  src={image} width={300} height={300} />
        </div>
    </div>
  )
}