
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

import {FacilityTypeAttrType} from '../product/FacilityTypeAttr.js';
import {FacilityType} from '../product/Facility.js';


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
    facilities: {
      type: new GraphQLList(FacilityType),
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?facilityTypeId=${facilityType.facilityTypeId}`)
    },
    facilityTypeAttrs: {
      type: new GraphQLList(FacilityTypeAttrType),
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`facilityTypeAttrs/find?facilityTypeId=${facilityType.facilityTypeId}`)
    },
    facilityTypes: {
      type: new GraphQLList(FacilityTypeType),
      args : {facilityTypeId: {type: GraphQLString}},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`facilityTypes/find?facilityTypeId=${facilityType.facilityTypeId}`)
    }
  })
});

export {FacilityTypeType};
    




const FacilityTypeInputType = new GraphQLInputObjectType({
  name: 'FacilityTypeInputType',
  description: 'input type for FacilityType in product',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    facilityTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {FacilityTypeInputType};
    