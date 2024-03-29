import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import "./Admin.css"
export default function Admin() {

    const location = useLocation();
    return <>
        <span className="title primary-text">{
            ({
                "/a/dashboard": "Admin Dashboard",
                "/a/managecustomers": "Manage Customers",
                "/a/managebusinesses": "Mange Businesses",
                "/a/auth": "Login"
            })[location.pathname] || "Admin"
        }</span>

        <Outlet />
    </>
}

export function AdminDash() {
    const navigate = useNavigate();
    const reports = [
        { reported_by: "user_id", report_type: "type", description: "ftew eufyff iwbfuyw wufeyebfu wshfb7ys uweg7t", cause: "inappropriate" },
        { reported_by: "user_id", report_type: "type", description: "ftew eufyff iwbfuyw wufeyebfu wshfb7ys uweg7t", cause: "inappropriate" },
        { reported_by: "user_id", report_type: "type", description: "ftew eufyff iwbfuyw wufeyebfu wshfb7ys uweg7t", cause: "inappropriate" },
        { reported_by: "user_id", report_type: "type", description: "ftew eufyff iwbfuyw wufeyebfu wshfb7ys uweg7t", cause: "inappropriate" },
        { reported_by: "user_id", report_type: "type", description: "ftew eufyff iwbfuyw wufeyebfu wshfb7ys uweg7t", cause: "inappropriate" },
    ]
    const stats = {
        views: 20,
        avgRating: 4.5,
        revenue: 7000,
        viewGraph: [6, 8.7, 8, 8.7, 8, 8.7, 8.7, 8, 8.7, 8, 8.7, 8, 7, 8.9, 8.7, 8, 8.7, 8, 8.7, 5]
    }
    return <div className="adminDash">
        <div className="dashLeft">
            <div onClick={() => navigate("/a/managecustomers")} className="tertiary-container man_users_btn on-tertiary-container-text">
                <div style={{ fontSize: "0.4em", padding: "0", margin: "0 0 -20px 0" }}>Manage</div> Customers
            </div>
            <div onClick={() => navigate("/a/managebusinesses")} className="secondary-container man_users_btn on-secondary-container-text">
                <div style={{ fontSize: "0.4em", padding: "0", margin: "0 0 -20px 0" }}>Manage</div> Businesses
            </div>
        </div>
        <div className="dashRight">
            <span className="primary-text headline-medium">Reports</span>
            <div className="reports">{reports.map((report, idx) => {
                return <div className="report on-surface-text" key={idx}>{report.description}<br />by: {report.reported_by}</div>
            })}</div>
        </div>
        <div className="analyticsDash">
            <div className='statsDash'>
                <span className="primary-text headline-medium">Stats</span>
                <p className='secondary-text title-medium'>Views: {stats.views}</p>
                <p className='secondary-text title-medium'>Average Rating: {stats.avgRating}</p>
                <p className='secondary-text title-medium'>Revenue: {stats.revenue}</p>
            </div>
            <div className='graphDash'>
                <Line data={{
                    labels: [...Array(stats.viewGraph.length).keys()], datasets: [{
                        label: "Views",
                        data: stats.viewGraph,
                        backgroundColor: "#75d0dd",
                        borderColor: "#75d0dd",
                        pointRadius: 0,
                    }]
                }}
                />
            </div>
        </div>
    </div>
}

export function ManageCustomers() {
    const customers = [
        {id:"customer_id", name:"customer"},
        {id:"customer_id", name:"customer"},
        {id:"customer_id", name:"customer"},
        {id:"customer_id", name:"customer"},
    ]
    return <div className="manage_customers">
        <div className="business_list">
            {customers.map((customers, index)=>{
                return <div className="business_listitem secondary-container on-secondary-container-text">{customers.id}<br/>{customers.name}</div>
            })}
        </div>
    </div>
}

export function ManageBusinesses() {
    const businesses = [
        {id:"bsnss01", name: "Bakery"},
        {id:"bsnss01", name: "Bakery"},
        {id:"bsnss01", name: "Bakery"},
        {id:"bsnss01", name: "Bakery"},
    ]
    return <div className="manage_businesses">
        <div className="business_list">
            {businesses.map((business, index)=>{
                return <div className="business_listitem secondary-container on-secondary-container-text">{business.id}<br/>{business.name}</div>
            })}
        </div>
        <div className="business_overview">

        </div>
        <div className="reports">

        </div>
    </div>
}