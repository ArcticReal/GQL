
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityType} from '../product/FacilityType.js';


const FacilityTypeAttr = new GraphQLObjectType({
  name: 'FacilityTypeAttrType',
  description: 'Type for FacilityTypeAttr in product',

  fields: () => ({
    facilityType: {
      type: FacilityTypeType,
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facilityTypeAttr, args, {loaders}) => loaders.ofbizArray.load(`facilityTypes/find?=${args.facilityTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FacilityTypeAttr};
    