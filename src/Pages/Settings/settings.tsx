import React from "react";
import { Link, Outlet } from "react-router-dom";


function ProfileSettings() {
    return (
        <section className="dark dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Profile</h2>
                <form action="#">
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                        <div className="w-full">
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                            <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Apple" placeholder="Product brand" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="2999" placeholder="$299" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="2999" placeholder="$299" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="description" rows={8} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write a product description here...">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button type="submit" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

function NoftificationSettings() {
    return (
        <>
            <div className="mt-10 sm:mt-0 dark">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white dark:bg-black py-5">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="push-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="push-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Push Notification</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="mail-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="mail-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Notification on Mail</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="offers-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="offers-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Notify Offers</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="auto-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="auto-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Auto Bill Notification</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="tips-notification-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="tips-notification-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Get Tips and Tricks while using the App</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

function DashboardSettings() {
    return (
        <>
            <div className="mt-10 sm:mt-0 dark">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white dark:bg-black py-5">
                                    <div className="flex flex-col">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="small-toggle" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="small-toggle1" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle1" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="small-toggle2" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle2" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="small-toggle3" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle3" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="small-toggle4" className="inline-flex relative items-center mb-5 cursor-pointer">
                                                <input type="checkbox" value="" id="small-toggle4" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="link-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

class SettingsTab extends React.Component {
    render() {
        return (
            <div className="text-sm font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <Link to="profile" className="inline-block pt-4 pr-4 rounded-t-lg border-transparent hover:text-gray-200 dark:hover:text-white-100 focus:active:text-blue-500 font-bold">Profile</Link>
                    </li>
                    <li className="mr-2 dark">
                        <Link to="dashboard" className="inline-block pt-4 pr-4 text-blue-600 rounded-t-lg border-blue-600 active dark:text-blue-500 dark:border-blue-500 font-bold" aria-current="page">Dashboard</Link>
                    </li>
                    <li className="mr-2">
                        <Link to="notification" className="inline-block pt-4 pr-4 rounded-t-lg border-transparent hover:text-gray-200 dark:hover:text-white-100 font-bold">Notification</Link>
                    </li>
                    <li className="mr-2">
                        <Link to="#" className="inline-block pt-4 pr-4 rounded-t-lg border-transparent hover:text-gray-200 dark:hover:text-white-100 font-bold">Contacts</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

class Settings extends React.Component {
    render() {
        return (
            <main className="w-full h-full bg-black p-10 overflow-y-auto">
                <h1 className="text-white text-xl font-bold">
                    Settings
                </h1>
                <SettingsTab />
                <Outlet />
            </main >
        )
    }
}

export {
    DashboardSettings, NoftificationSettings, ProfileSettings, Settings
}