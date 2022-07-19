import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { BiMenu } from 'react-icons/bi';
import { APIs } from '../../pages/api/hello';
import useGetHook from '../customHooks/useGetHooks';

function Header() {
    const [showNav, setshowNav] = useState(false);
    const [showSearch, setshowSearch] = useState(false);
    const [name, setName] = useState("");
    const router = useRouter();

    const { isLoading: navigationLoading, data: navigationListData } = useGetHook(
        {
            queryKey: 'navigationListData',
            url: APIs?.navigation
        }
    );

    function HandleSubmit(e) {
        e.preventDefault();
        router.push(`/searchPage/${name}`);
        setName("");
    }

    return (
        <div className="header container">
            <div>
                <Link href="/">
                    {/* <div style={{ display: "flex", maxWidth: "120px", alignItems: "center", justifyContent: "center" }} className="img-holder"> */}
                    <img
                        src="../logo.png"
                        alt=""
                    // width="80%"
                    // height="100%"
                    />

                    {/* </div> */}
                </Link>
            </div>
            <div className="navbar">
                <div className={showNav ? "mobile-menu" : "n-list"}>
                    <ul>

                        <Link href="/cryptoNews">
                            <li>
                                Crypto News
                            </li>
                        </Link>
                        {navigationListData?.results?.map((item, key) =>
                            <li>
                                <Link href={`/research/${item.category_id}`}>
                                    {
                                        item?.title
                                    }
                                </Link>
                            </li>
                        )}
                        <Link href="/NFT">
                            <li>
                                NFT News
                            </li>
                        </Link>
                        <Link href="/postCryptoNews">
                            <li>
                                Post Crypto News
                            </li>
                        </Link>
                        <Link href="/marketLivePage">
                            <li>
                                Market Updates
                            </li>
                        </Link>
                        <Link href="/contact">
                            <li>
                                Contact Us
                            </li>
                        </Link>
                    </ul>
                </div>
                <button className='searchbutton'>
                    {showSearch ? <ImCross onClick={() => setshowSearch(!showSearch)} /> :
                        <FaSearch className='search' onClick={() => setshowSearch(!showSearch)} />}
                </button>
                <div className="hamburger" onClick={() => setshowNav(!showNav)}>
                    <BiMenu />
                </div>
            </div>
            {/* for search input */}
            <div className={showSearch ? "searchInputOn" : "searchInputoff"}>
                <form onSubmit={HandleSubmit}>
                    <input type="text" placeholder='Search...' value={name} onChange={(e) => setName(e.target.value)} />
                    <button className='searchbutton' type='submit' style={{ "opacity": "0.5" }}>
                        <FaSearch className='search' /></button>
                </form>
            </div>
            {/* for seach input ends here */}
        </div>
    )
}

export default Header;