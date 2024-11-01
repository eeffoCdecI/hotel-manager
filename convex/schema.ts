import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  hotels: defineTable({
    id: v.id('hotels'),
    name: v.string(),
    contactInfo: v.string(),
    location: v.string(),
    description: v.string(),
    rating: v.string(),
  }),
  rooms: defineTable({
    id: v.id('rooms'),
    hotelId: v.id('hotels'),
    roomType: v.string(),
    roomNumber: v.string(),
    price: v.number(),
    status: v.string(),
    capacity: v.number(),
    services: v.optional(v.array(v.id('roomServices'))),
  }),
  roomServices: defineTable({
    id: v.id('roomServices'),
    name: v.string(),
    description: v.string(),
    price: v.number(),
    type: v.string(),
    aplicableRooms: v.array(v.id('rooms')),
  }),
  guests: defineTable({
    id: v.id('guests'),
    name: v.string(),
    email: v.optional(v.string()),
    phone: v.string(),
    address: v.string(),
  }),
});
