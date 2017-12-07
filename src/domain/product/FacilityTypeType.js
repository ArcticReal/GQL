
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityTypeAttrType} from '../product/FacilityTypeAttrType.js';
import {FacilityType} from '../product/FacilityType.js';


const FacilityTypeType = new GraphQLObjectType({
  name: 'FacilityTypeType',
  description: 'Type for FacilityType in product',

  fields: () => ({
    parentType: {
      type: FacilityTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (facilityType, args, {loaders}) => loaders.ofbiz.load(`facilityTypes/find?facilityTypeId=${facilityType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    facilityTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    facility: {
      type: new GraphQLList(FacilityType),
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?facilityTypeId=${facilityType.facilityTypeId}`)
    },
    facilityTypeAttr: {
      type: new GraphQLList(FacilityTypeAttrType),
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`facilityTypeAttrs/find?facilityTypeId=${facilityType.facilityTypeId}`)
    },
    facilityType: {
      type: new GraphQLList(FacilityTypeType),
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`facilityTypes/find?facilityTypeId=${facilityType.facilityTypeId}`)
    }
  })
});

export {FacilityTypeType};
    