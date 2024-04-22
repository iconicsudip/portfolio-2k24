"use client";
import React, { useState } from 'react'
import { Input } from '../input/Input'
import { Label } from '../label/Label'
import { cn } from '@/utils/cn'
import axios from 'axios'
import { T_Contact } from '@/types/contact';

export default function ContactForm() {
    const [formValues, setFormValues] = useState<T_Contact>({
        firstname: undefined,
        lastname: undefined,
        email: undefined,
        message: undefined
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!formValues.firstname || !formValues.lastname || !formValues.email || !formValues.message){
            setFormValues({
                ...formValues,
                firstname: formValues.firstname || '',
                lastname: formValues.lastname || '',
                email: formValues.email || '',
                message: formValues.message || ''
            })
            return
        }
        await axios.post('/api/contact', formValues).then(res => {
            const data = res.data
            console.log(data)
        }).catch(e => {
            console.log(e)
        })
    }
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl py-4 shadow-input bg-black">
            <h2 className="font-bold text-xl text-neutral-200 mb-1">
                Contact with me
            </h2>
            <p className=" text-sm text-neutral-400 max-w-sm mt-200">
                You can contact with me by filling up the form below.
            </p>
        
            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input name="firstname" value={
                            formValues.firstname
                        } onChange={(e) => setFormValues({
                            ...formValues,
                            [e.target.id]: e.target.value
                        })}
                        inputFilled={formValues.firstname}
                        id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input
                            value={formValues.lastname}
                            inputFilled={formValues.lastname}
                            onChange={(e) => setFormValues({
                                ...formValues,
                                [e.target.id]: e.target.value
                            })}
                        name="lastname" id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        value={formValues.email}
                        inputFilled={formValues.email}
                        onChange={(e) => setFormValues({
                            ...formValues,
                            [e.target.id]: e.target.value
                        })}
                     name='email' id="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Message</Label>
                    <Input
                        value={formValues.message}
                        inputFilled={formValues.message}
                        onChange={(e) => setFormValues({
                            ...formValues,
                            [e.target.id]: e.target.value
                        })}
                    id="message" name="message" placeholder="Write your purpose..." type="textarea" />
                </LabelInputContainer>
                <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200 w-full text-sm"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}


const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};