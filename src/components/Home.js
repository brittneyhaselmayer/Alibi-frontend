import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
	const currentUser = useSelector((state) => state.currentUser.name);
	return <div>Welcome {currentUser}</div>;
}
