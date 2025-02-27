"use client"

import TournamentDashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import { useState } from "react";


export default function Home() {

  const [searchQuery, setSearchQuery] = useState<string>('');

  // useEffect(() => {
  //   let result = games;


  //   if (searchQuery && result) {
  //     result = result.filter(product =>
  //       product.title.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //     setFilteredGames(result);
  //   }

  // }, [games, searchQuery])


  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <TournamentDashboard/>
    </div>
  );
}
