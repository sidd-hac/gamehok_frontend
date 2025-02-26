"use client";

import { useState } from "react";
import { Button } from "./ui/button";

interface Tournament {
    id: number;
    title: string;
    gameName: string;
    date: string;
    prizePool: number;
    status: string;
    description: string;
}

const tournamentsData: Tournament[] = [
    {
        id: 1,
        title: "Winter Clash 2025",
        gameName: "Valorant",
        date: "2025-03-10",
        prizePool: 5000.0,
        status: "Upcoming",
        description: "5v5, Best of 3, Open to all",
    },
    {
        id: 2,
        title: "Apex Legends Showdown",
        gameName: "Apex Legends",
        date: "2025-02-20",
        prizePool: 3000.0,
        status: "Completed",
        description: "Trios, $1000 per player",
    },
    {
        id: 3,
        title: "CS:GO Pro League",
        gameName: "CS:GO",
        date: "2025-04-01",
        prizePool: 10000.0,
        status: "Upcoming",
        description: "5v5, Bracket Style",
    },
    {
        id: 4,
        title: "Dota 2 Championship",
        gameName: "Dota 2",
        date: "2025-05-15",
        prizePool: 15000.0,
        status: "Upcoming",
        description: "Teams of 5, Double Elimination",
    },
    {
        id: 5,
        title: "Fortnite Battle Royale",
        gameName: "Fortnite",
        date: "2025-01-25",
        prizePool: 7000.0,
        status: "Completed",
        description: "Solo tournament with cash rewards",
    },
];

export default function TournamentDashboard() {
    const [filter, setFilter] = useState("All");

    const filteredTournaments =
        filter === "All"
            ? tournamentsData
            : tournamentsData.filter((t) => t.status === filter);

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-violet-900 mb-6">
                🎮 Tournament Dashboard
            </h1>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4 mb-6">
                {["All", "Upcoming", "Completed"].map((status) => (
                    <button
                        key={status}
                        className={`px-4 py-2 rounded-lg font-medium transition ${filter === status
                            ? "bg-violet-600 text-white shadow-lg"
                            : "bg-gray-800 text-gray-300 hover:bg-violet-700 hover:text-white"
                            }`}
                        onClick={() => setFilter(status)}
                    >
                        {status}
                    </button>
                ))}
            </div>

            {/* Tournament Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTournaments.map((t) => (
                    <div
                        key={t.id}
                        className="bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-800 hover:scale-[1.02] transition"
                    >
                        <div className="flex justify-between items-center p-1" >

                            <h2 className="text-xl font-semibold text-white truncate">{t.title}</h2>
                            <p
                                className={`mt-2 text-sm font-semibold py-1 px-2 inline-block rounded-lg ${t.status === "Upcoming"
                                    ? "bg-blue-700 text-white"
                                    : "bg-green-600 text-white"
                                    }`}
                            >
                                {t.status}
                            </p>
                        </div>
                        <p className="text-gray-400 text-sm">{t.gameName}</p>
                        <p className="text-gray-300 mt-2">
                            <span className="font-semibold">📅 Date:</span> {t.date}
                        </p>
                        <p className="text-gray-300">
                            <span className="font-semibold">💰 Prize:</span> ${t.prizePool}
                        </p>
                        <Button
                            className="mt-2"
                            variant="secondary"
                        >
                            view details
                        </Button>

                        <p className="text-gray-400 mt-3 text-sm">{t.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
