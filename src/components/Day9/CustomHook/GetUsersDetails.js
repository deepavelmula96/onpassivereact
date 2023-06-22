import React from 'react'
import useFetchUrl from './useFetchUrl';

const GetUsersDetails = () => {
    const { loading, data, error } = useFetchUrl("https://jsonplaceholder.typicode.com/posts111/o823948230948239");
    console.log("getting_values", { data, error,loading })
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    else {
        return (
            <div>
                {console.log('user_details', data)}
                {data?.length > 0 ? data?.map(item =>
                    <div key={item.id}>{item?.title}</div>
                ):"ur url is incorrect"}
            </div>
        );
    }
}

export default GetUsersDetails