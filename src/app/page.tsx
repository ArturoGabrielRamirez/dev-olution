import Form from "@/components/Form";
import UsersContainer from "@/components/UsersContainer";

export default async function Home() {

   return (
    <>
      <h2 className="text-2xl">Simulador de pedidos</h2>
      <section className="flex flex-col p-12 h-full justify-center">
        <div className="flex flex-row justify-around">
          <UsersContainer />
         
        </div>
      </section>
    </>


  )
}