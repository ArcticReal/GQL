
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

import {MrpEventTypeType} from '../../manufacturing/MrpEventType/MrpEventTypeType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


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
    