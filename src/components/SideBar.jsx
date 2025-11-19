function SideBar() {
  return (
    <div className="bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-4">SideBar</h2>
      <ul>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Home</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Profile</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Settings</li>
        <li className="mb-2 hover:bg-gray-700 p-2 rounded">Logout</li>
      </ul>
    </div>
  )
}
export default SideBar