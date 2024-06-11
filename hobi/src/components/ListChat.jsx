import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

export default function ListChat() {
    return (
        <div className="flex-shrink-0 w-1/8 pr-4">

            <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                <h2 className="text-xl font-semibold mb-4"><FontAwesomeIcon icon={faComments} className="w-6 h-6 text-gray-600" /> Chat</h2>
                <ul>

                    <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
                        <div className="relative">
                            <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Group" className="w-12 h-12 rounded-full" />
                            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
                        </div>
                        <div className="flex-1 min-w-0 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-800 font-medium">Nama Pengguna 1</span>
                                <span className="text-gray-500 text-sm ml-5">10:30 AM</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-sm">10 menit yang lalu</span>
                                <span className="flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full">3</span>
                            </div>
                        </div>
                    </li>

                    <li className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg">
                        <div className="relative">
                            <img src="https://www.greenscene.co.id/wp-content/uploads/2022/01/Naruto-1-696x497.jpg" alt="Group" className="w-12 h-12 rounded-full" />
                            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
                        </div>
                        <div className="flex-1 min-w-0 cursor-pointer">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-800 font-medium">Nama Pengguna 1</span>
                                <span className="text-gray-500 text-sm">10:30 AM</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-500 text-sm">10 menit yang lalu</span>
                                <span className="flex items-center justify-center w-5 h-5 bg-red-500 text-white text-xs rounded-full">3</span>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}