"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface Tournament {
    id: number;
    title: string;
    gameName: string;
    date: string;
    prizePool: number;
    status: string;
    description: string;

}

const prizeBreakdown = [
    { position: "1st Place", amount: 5000 },
    { position: "2nd Place", amount: 3000 },
    { position: "3rd Place", amount: 1500 },
    { position: "4th Place", amount: 500 }
]

const rules = [
    "All participants must be registered before the tournament.",
    "Teams must be present 15 minutes before their scheduled match.",
    "Matches will be played according to the standard competitive rules.",
    "Admins have the final say in all disputes.",
]


// const Tournaments: Tournament[] = [
//   {
//     id: 1,
//     title: "CS:GO Pro League",
//     gameName: "CS:GO",
//     date: "April 1, 2025",
//     prizePool: 10000,
//     status: "Upcoming",
//     description: "5v5, Bracket Style. The most prestigious CS:GO tournament for professional teams.",
//   },
// ];

export default function TournamentDetailPage() {




    const { id } = useParams();
    const router = useRouter();
    const [tournament, setTournament] = useState<Tournament | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // if (id) {
        //   const foundTournament = Tournaments.find((t) => t.id === Number(id));
        //   setTournament(foundTournament || null);
        // }

        const getTournamentById = async () => {
            setLoading(true);

            try {

                const tournament = await fetch(`https://gamehok.netlify.app/tournaments/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: "include",

                })
                const data = await tournament.json();
                setTournament(data);

            } catch (error) {
                console.error("Error fetching tournament:", error);

            } finally {
                setLoading(false);
            }

        }
        getTournamentById();

    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">

                <span  >
                    <Loader2 className="w-10 h-10 animate-spin" />
                </span>
            </div>
        );
    }

    if (!tournament) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-slate-400 text-xl"> tournament not found </p>
            </div>

        );
    }


    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">
            {/* Back to Dashboard */}
            <button
                onClick={() => router.back()}
                className="text-purple-400 hover:underline mb-4 block"
            >
                ← Back to Dashboard
            </button>

            {/* Tournament Container */}
            <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                    <h1 className="text-3xl font-bold text-purple-300">{tournament.title}</h1>
                    <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${tournament.status === "Upcoming" ? "bg-blue-600" : "bg-green-600"
                            }`}
                    >
                        {tournament.status}
                    </span>
                </div>

                {/* Tournament Info */}
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <h2 className="text-xl font-bold text-purple-400 mb-2">Tournament Info</h2>
                        <p className="text-gray-300">🎮 Game: {tournament.gameName}</p>
                        <p className="text-gray-300">📅 Date: {tournament.date}</p>
                        <p className="text-gray-300">
                            🏆 Prize Pool: <span className="text-yellow-400 font-semibold">${tournament.prizePool}</span>
                        </p>
                    </div>

                    {/* Prize Breakdown */}
                    <div>
                        <h2 className="text-xl font-bold text-purple-400 mb-2">Prize Breakdown</h2>
                        <div className="bg-gray-700 p-3 rounded-lg">
                            {prizeBreakdown.map((prize, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between border-b border-gray-600 py-1 last:border-0"
                                >
                                    <span>{prize.position}</span>
                                    <span className="text-yellow-400 font-semibold">${prize.amount}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-purple-400 mb-2">Description</h2>
                    <p className="text-gray-300">{tournament.description}</p>
                </div>

                {/* Rules Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-purple-400 mb-2">Rules</h2>
                    <div className="bg-gray-700 p-3 rounded-lg">
                        {rules.map((rule, index) => (
                            <p key={index} className="text-gray-300 flex items-start">
                                <span className="text-yellow-400 mr-2">•</span>
                                {rule}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
