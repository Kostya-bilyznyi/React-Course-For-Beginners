// import React from 'react';
// import logo from './logo.svg';
import './App.css';

//Default
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
// 		  <h2>HELLO WORLD!</h2>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//Footer1
// const Footer = () => (
// 	<footer>Footer</footer>
// )

type FooterProops = {
	copyright: string;
}

const Footer: React.FC<FooterProops> = (props) => (
	<span>{props.copyright}</span>
)

const copyObj = {text: 'copyrigh'}



const App = () => (
	<div className="App">
		<h1>HELLO BaCa</h1>
		<p>{copyObj.text}<Footer copyright=' C'/></p>
		
		

		{/* Footer1 */}
		{/* <Footer/> */}
	</div>
)
export default App;
