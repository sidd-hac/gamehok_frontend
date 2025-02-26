"use client"

import TournamentDashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import { useState } from "react";


export default function Home() {

  const [searchQuery, setSearchQuery] = useState<string>('');

  // useEffect(() => {
  //   let result = [...products];


  //   if (searchQuery) {
  //     result = result.filter(product =>
  //       product.title.toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //   }

  // }, [])


  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <TournamentDashboard />
    </div>
  );
}
