import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebaseConfig'
 
const useRequireAuth = () => {
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                router.replace('/');
            }
        })
        return () => unsubscribe();
    }, [router]);
}

export default useRequireAuth