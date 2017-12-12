
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

import {FacilityTypeType} from '../product/FacilityType.js';


const FacilityTypeAttrType = new GraphQLObjectType({
  name: 'FacilityTypeAttrType',
  description: 'Type for FacilityTypeAttr in product',

  fields: () => ({
    facilityType: {
      type: FacilityTypeType,
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facilityTypeAttr, args, {loaders}) => loaders.ofbiz.load(`product/facility/facilityTypes/find?facilityTypeId=${facilityTypeAttr.facilityTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FacilityTypeAttrType};
    




const FacilityTypeAttrInputType = new GraphQLInputObjectType({
  name: 'FacilityTypeAttrInputType',
  description: 'input type for FacilityTypeAttr in product',

  fields: () => ({
    facilityTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FacilityTypeAttrInputType};
    