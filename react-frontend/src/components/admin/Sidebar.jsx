import '/src/assets/admin.css';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <>
            <div class="col-md-2 sidebar">
                <h4>Testers Community</h4>
                <Link to="/admin/dashboard">Dashboard</Link> 
                <Link to="/admin/submit-app" class="btn btn-custom mt-3" style={{ color: 'black' }}>+Submit New App</Link> 
                {/* <a href="#" class="btn btn-custom mt-3" style={{ color: 'black' }}>+ Submit New App</a> */}
                <Link to="/admin/support">Support</Link> 
                <div class="mt-4">
                    {/* <img src="person.jpg" alt="Profile" class="profile-img me-2" /> */}
                        <span>Shimanta Das</span>
                </div>
            </div>
        </>
    )
}
