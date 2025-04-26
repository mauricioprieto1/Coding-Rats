from fastapi import FastAPI
from supabase import create_client
from pydantic import BaseModel
from typing import List, Optional
from dotenv import load_dotenv
import os

app = FastAPI()

load_dotenv()
url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")
supabase = create_client(url, key)

class Collection(BaseModel):
    collection_id: int
    title: str
    description: Optional[str] = None
    author: Optional[str] = None
    grade_level: Optional[str] = None

class OrderInfo(BaseModel):
    order_id: int
    collection_id: int
    grade_level: str
    item_id: str
    list_price: float
    your_price: float

class DistrictInfo(BaseModel):
    district_id: int
    name: str
    location: str
    contact_email: str
    established_year: int

class EducationalFocusArea(BaseModel):
    id: int
    district_id: int
    focus_area: str

class TrendingTopic(BaseModel):
    id: int
    district_id: int
    focus_area_id: int
    topic_name: str
    collection_id: Optional[int] = None
    last_updated: Optional[str] = None

@app.get("/collections/", response_model=List[Collection])
async def get_collections():
    response = supabase.table("collections").select("*").execute()
    return response.data

@app.get("/collections/{collection_id}", response_model=Collection)
async def get_collection(collection_id: int):
    response = supabase.table("collections").select("*").eq("collection_id", collection_id).execute()
    if response.data:
        return response.data[0]
    return {"error": "Collection not found"}

@app.get("/order-info/{collection_id}", response_model=List[OrderInfo])
async def get_order_info(collection_id: int):
    response = supabase.table("order-info").select("*").eq("collection-id", collection_id).execute()
    return response.data

@app.get("/collections/{collection_id}/details")
async def get_collection_details(collection_id: int):
    collection_response = supabase.table("collections").select("*").eq("collection_id", collection_id).execute()
    order_info_response = supabase.table("order-info").select("*").eq("collection-id", collection_id).execute()

    if collection_response.data:
        collection = collection_response.data[0]
        order_info = order_info_response.data
        return {"collection": collection, "order_info": order_info}
    return {"error": "Collection not found"}

# District Info Endpoints
@app.get("/districts/", response_model=List[DistrictInfo])
async def get_districts():
    response = supabase.table("trends_db.district_info").select("*").execute()
    return response.data

# Educational Focus Areas Endpoints
@app.get("/focus-areas/", response_model=List[EducationalFocusArea])
async def get_focus_areas():
    response = supabase.table("trends_db.educational_focus_areas").select("*").execute()
    return response.data

# Trending Topics Endpoints
@app.get("/trending-topics/", response_model=List[TrendingTopic])
async def get_trending_topics():
    response = supabase.table("trends_db.trending_topics").select("*").execute()
    return response.data

# TESTING
# Fetch collections
collections = supabase.table("collections").select("*").execute()
print(collections.data)

# Fetch order-info
order_info = supabase.table("order-info").select("*").execute()
print(order_info.data)

