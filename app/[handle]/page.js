import { ObjectId } from "mongodb"
export default async function Page({ params }) {
  const { handle } = await params

 const item =  {
  _id: new ObjectId('6aa8e568f95c383514c8a8dc'),
  links: [
    {
      link: 'www.google.com',
      linktext: 'google'
    }
  ],
  handle: 'Ved',
  pic: 'this'
}

  return <div className="flex min-h-screen bg-purple-400 justify-center items-center" >
    <div className="photo"><img src={item.pic} alt="" /></div>
  </div>
}