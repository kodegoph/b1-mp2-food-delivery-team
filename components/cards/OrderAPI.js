

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{ 
        props: { customer: data}
    }
}
const Names = ({customer}) => {
    return (
        <div>
            {customer.map(customer => (
                <div key={customer.id}>
                    <a>
                        <h3>{customer.name}</h3>
                        </a>                    
                </div>
            ))}
        
        </div>
   );


}    
export default Names

 