import React from 'react';
 
// โหลดความสามารถของ react-router มาใช้งาน
import { Link } from 'react-router';
 
class App extends React.Component {
 
    // ใส่ link ไปยังหน้า Home และ About
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </header>
                {this.props.children}
            </div>
        );
   }
}
 
export default App;