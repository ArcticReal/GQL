
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {MrpEventTypeType} from '../manufacturing/MrpEventType.js';
import {ProductType} from '../product/Product.js';
import {FacilityType} from '../product/Facility.js';


const MrpEventType = new GraphQLObjectType({
  name: 'MrpEventType',
  description: 'Type for MrpEvent in manufacturing',

  fields: () => ({
    mrpEventType: {
      type: MrpEventTypeType,
      args : {mrpEventTypeId: {type: GraphQLString}},
      resolve: (mrpEvent, args, {loaders}) => loaders.ofbiz.load(`manufacturing/mrpEvent/mrpEventTypes/find?mrpEventTypeId=${mrpEvent.mrpEventTypeId}`)
    },
    mrpId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (mrpEvent, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${mrpEvent.facilityId}`)
    },
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (mrpEvent, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${mrpEvent.productId}`)
    },
    isLate: {type: GraphQLBoolean},
    eventName: {type: GraphQLString},
    eventDate: {type: GraphQLString}
  })
});

export {MrpEventType};
    




const MrpEventInputType = new GraphQLInputObjectType({
  name: 'MrpEventInputType',
  description: 'input type for MrpEvent in manufacturing',

  fields: () => ({
    mrpEventTypeId: {type: GraphQLString},
    mrpId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    isLate: {type: GraphQLBoolean},
    eventName: {type: GraphQLString},
    eventDate: {type: GraphQLString}
  })
});

export {MrpEventInputType};
    