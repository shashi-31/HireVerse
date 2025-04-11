import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { JOB_API_ENDPOINT } from "@/utils/data";
import { toast } from "sonner";
import Navbar from "../components_lite/Navbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experienceLevel: "",
    position: 0,
    companyId: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${id}`, {
          withCredentials: true,
        });
        // if (res.data.success) {
        //   setInput(res.data.job);
        //   console.log(res.data);
        //   console.log("jnj")
          
        // } else {
        //   toast.error("Failed to load job details");
        // }
        // console.log(res);
        if(res.data)
        {
          setInput(res.data?.job);
          console.log(res.data.job);
          
        }else{
          console.log(res);
          
        }
        
      } catch (err) {
        toast.error("Something went wrong fetching job data");
      }
    };
     fetchJob();
  }, [id]);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(input);
      const res = await axios.put(`${JOB_API_ENDPOINT}/update/${id}`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success("Job updated successfully!");
        navigate("/admin/jobs");
      } else {
        toast.error("Failed to update job");
      }
    } catch (err) {
      toast.error("Error updating job");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5">
        <form
          onSubmit={submitHandler}
          className="p-8 max-w-4xl border border-gray-500 shadow-sm hover:shadow-xl hover:shadow-red-300 rounded-lg"
        >
          <h2 className="text-xl font-bold mb-4">Edit Job</h2>
          <div className="grid grid-cols-2 gap-5">
            {["title", "description", "location", "salary", "position", "requirements", "experienceLevel", "jobType"].map((field) => (
              <div key={field}>
                <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                <Input
                  name={field}
                  value={input[field]}
                  placeholder={`Enter job ${field}`}
                  className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 hover:shadow-blue-400"
                  onChange={changeEventHandler}
                />
              </div>
            ))}
            {/* <div>
              {companies.length > 0 && (
                <Select onValueChange={selectChangeHandler}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => (
                        <SelectItem
                          key={company._id}
                          value={company.name.toLowerCase()}
                        >
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            </div> */}
          </div>

          <div className="flex items-center justify-center mt-5">
            <Button
              type="submit"
              className="w-full px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Update Job
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJob;
