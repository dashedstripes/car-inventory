export default async function SearchBox() {

  async function search(formData: FormData) {
    'use server'

    console.log('calling search on the server!');
    console.log(formData);

    return { cars: [] }
  }

  return (
  <form action={search}>
    <input type="text" placeholder="Search..." className="border w-full p-4 rounded"/>
  </form>
  )
}