import { ObjectId } from "mongodb"
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation"

export default async function Page({ params }) {
  const { handle } = await params
  const client = await clientPromise
  const db = client.db("bittree")
  const collection = db.collection("links")

  const item = await collection.findOne({handle:handle})
  if(!item){
    return notFound()
  }


  return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10 " >
    {item && <div className="photo  flex flex-col jusitfy-center items-center gap-2">
    <img className=" w-35 h-35  rounded-full" src={item.pic} alt="" />
    <span className="font-bold text-xl">@{item.handle}</span>
    <span className="desc w-80 text-center">{item.desc}</span>
    <div className="links">
        {item.links.map((item,index)=>{
            return <Link key={index} href={item.link}><div className="py-4 px-2 bg-purple-100 rounded-md my-3 min-w-96 flex justify-center" >
               {item.linktext} 
                
            </div></Link>
        })}
    </div>
    </div>}
  </div>
}