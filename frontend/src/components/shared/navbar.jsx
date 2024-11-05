import {Popover,PopoverContent,PopoverTrigger} from "@radix-ui/react-popover";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


const Navbar = () => {
  const user = true;
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[#F83002]">P</span>lacement
            <span className="text-[#F83002]">T</span>racker
          </h1>
        </div>
        <div className="flex item-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li>Jobs</li>
            <li>Status</li>
          </ul>
          {
            !user ?(
              <div>
                <Button variant="outline">Login</Button>
                <Button>Signup</Button>
              </div>
             ) : (
              <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Turjo Das</h4>
                    <p className="text-sm text-muted-foreground">Hello this is bio</p>
                  </div>
                </div>
                <div className="flex flex-row text-center text-gray-600">
                    <Button variant="link">View Profile</Button>
                    <Button variant="link">Log Out</Button>
                </div>
              </PopoverContent>
            </Popover>
             )
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;