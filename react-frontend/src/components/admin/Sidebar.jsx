import '/src/assets/admin.css';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <>
            <div class="col-md-2 sidebar">
                <h4>Testers Community</h4>
                <Link to="/admin/dashboard"><i class="bi bi-speedometer2"></i> Dashboard</Link> 
                <Link to="/admin/submit-app" class="btn btn-custom mt-3" style={{ color: 'black' }}><i class="bi bi-rocket-takeoff"></i> Submit New App</Link> 
                <Link to="/admin/support"><i class="bi bi-info-circle"></i> Support</Link> 
                <div class="mt-4">
                    {/* <img src="person.jpg" alt="Profile" class="profile-img me-2" /> */}
                        <span>Shimanta Das</span>
                </div>
            </div>
        </>
    )
}
