
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {MrpEventTypeType} from '../manufacturing/MrpEventTypeType.js';
import {ProductType} from '../product/ProductType.js';
import {FacilityType} from '../product/FacilityType.js';


const MrpEventType = new GraphQLObjectType({
  name: 'MrpEventType',
  description: 'Type for MrpEvent in manufacturing',

  fields: () => ({
    mrpEventType: {
      type: MrpEventTypeType,
      args : {mrpEventTypeId: {type: GraphQLString}},
      resolve: (mrpEvent, args, {loaders}) => loaders.ofbiz.load(`mrpEventTypes/find?mrpEventTypeId=${mrpEvent.mrpEventTypeId}`)
    },
    mrpId: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (mrpEvent, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${mrpEvent.facilityId}`)
    },
    quantity: {type: GraphQLFloat},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (mrpEvent, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${mrpEvent.productId}`)
    },
    isLate: {type: GraphQLBoolean},
    eventName: {type: GraphQLString},
    eventDate: {type: GraphQLString}
  })
});

export {MrpEventType};
    