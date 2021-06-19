import CustomerTable from "../components/CustomerTable";

const customers = () => {
    return (
        <div className="me-main">
            <div className="container-fluid vh-100 p-2">
                <CustomerTable />
            </div>
        </div>
    );
};

export default customers;
