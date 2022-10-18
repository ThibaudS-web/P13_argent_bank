import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../app/store"

export const navigate = useNavigate()
export const dispatch = useDispatch<AppDispatch>()
