import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
    id: string,
    name: string,
    imageUrl: string | null,
    region : string,
    subscriberCount: number,
    columnistCount: number,

    setId: (newId: string) => void
    setName: (newName: string) => void
    setImageUrl: (newImageUrl: string | null) => void
    setRegion: (newRegion: string) => void
    setSubscriberCount: (newSubscriberCount: number) => void
    setColumnistCount: (newColumnistCount: number) => void
    reset: () => void
}

export const userStore = create(
    persist<UserState>(
        (set) => ({
            id: '',
            name: '',
            imageUrl: null,
            region: '',
            subscriberCount: 0,
            columnistCount: 0,
            setId: (newId) => set({id: newId}),
            setName: (newName) => set({name: newName}),
            setImageUrl: (newImageUrl) => set({imageUrl: newImageUrl}),
            setRegion: (newRegion: string) => set({region: newRegion}),
            setSubscriberCount: (newSubscriberCount: number) => set({subscriberCount: newSubscriberCount}),
            setColumnistCount: (newColumnistCount: number) => set({columnistCount: newColumnistCount}),
            reset: () => set({id: '', name: '', imageUrl: null, region: '', subscriberCount: 0, columnistCount: 0})
}), {name : 'user-key'}));


export default userStore;