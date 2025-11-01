"use client";

import React from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { cn } from "@/lib/utils";
import { PiBugBeetle, PiUser, PiBroadcast } from "react-icons/pi";

const notifications = [
  { icon: <PiBugBeetle className="bg-[#E3F5FF] text-[#1C1C1C] rounded-sm p-1 text-3xl"/>, text: "You have a bug that needs...", time: "Just now" },
  { icon: <PiUser className="bg-[#E3F5FF] text-[#1C1C1C] rounded-sm p-1 text-3xl"/>, text: "New user registered", time: "59 minutes ago" },
  { icon: <PiBugBeetle className="bg-[#E3F5FF] text-[#1C1C1C] rounded-sm p-1 text-3xl"/>, text: "You have a bug that needs...", time: "12 hours ago" },
  { icon: <PiBroadcast className="bg-[#E3F5FF] text-[#1C1C1C] rounded-sm p-1 text-3xl"/>, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];

const activities = [
  { avatar: "/bugthatneeds.png", text: "You have a bug that needs...", time: "Just now" },
  { avatar: "/newversion.png", text: "Released a new version", time: "59 minutes ago" },
  { avatar: "/submittedbug.png", text: "Submitted a bug", time: "12 hours ago" },
  { avatar: "/modified.png", text: "Modified A data in Page X", time: "Today, 11:59 AM" },
  { avatar: "/deleted.png", text: "Deleted a page in Project X", time: "Feb 2, 2023" },
];

const contacts = [
  { name: "Natali Craig", avatar: "/NataliCraig.png" },
  { name: "Drew Cano", avatar: "/DrewCano.png" },
  { name: "Orlando Diggs", avatar: "/OrlandoDiggs.png" },
  { name: "Andi Lane", avatar: "/AndiLane.png" },
  { name: "Kate Morrison", avatar: "/KateMorrison.png" },
  { name: "Koray Okumus", avatar: "/KorayOkumus.png" },
];

interface RightSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const RightSidebar = ({ isOpen = false, onClose }: RightSidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed xl:static inset-y-0 right-0 z-50 h-screen bg-white dark:bg-[#1C1C1C] border-l border-gray-200 dark:border-[#333333] overflow-y-auto shrink-0 transition-all duration-300 ease-in-out",
          isOpen ? "w-72 opacity-100" : "w-0 opacity-0 xl:w-0"
        )}
      >
        <div className="p-6 space-y-8">
          {/* Close button for mobile */}
          <div className="flex items-center justify-between xl:hidden mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Notifications</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-[#333333] rounded-lg"
            >
              <MdClose className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        {/* Notifications */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Notifications</h2>
          <div className="space-y-4">
            {notifications.map((notification, index) => (
              <div key={index} className="flex gap-3">
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 dark:bg-[#E3F5FF]">{notification.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-gray-100">{notification.text}</p>
                  <p className="text-xs text-[#A4A4A4] dark:text-[#7E7E7E] mt-1">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Activities</h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-3">
                <div className="relative shrink-0 w-8 h-8 rounded-full overflow-hidden bg-gray-100 dark:bg-[#333333]">
                  <Image
                    src={activity.avatar}
                    alt={activity.text}
                    fill
                    className="object-cover"
                    quality={1000}
                    unoptimized
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-gray-100">{activity.text}</p>
                  <p className="text-xs text-[#A4A4A4] dark:text-[#7E7E7E] mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Contacts</h2>
          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100 dark:bg-[#333333]">
                  <Image
                    src={contact.avatar}
                    alt={contact.name}
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized
                  />
                </div>
                <span className="text-sm text-gray-900 dark:text-white">{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

