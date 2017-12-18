
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
      resolve: (facilityType, args, {loaders}) => loaders.ofbiz.load(`product/facility/facilityTypes/find?facilityTypeId=${facilityType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    facilityTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    facilities: {
      type: new GraphQLList(FacilityType),
      args : {},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`product/facilitys/find?facilityTypeId=${facilityType.facilityTypeId}`)
    },
    facilityTypeAttrs: {
      type: new GraphQLList(FacilityTypeAttrType),
      args : {},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityTypeAttrs/find?facilityTypeId=${facilityType.facilityTypeId}`)
    },
    facilityTypes: {
      type: new GraphQLList(FacilityTypeType),
      args : {},
      resolve: (facilityType, args, {loaders}) => loaders.ofbizArray.load(`product/facility/facilityTypes/find?facilityTypeId=${facilityType.facilityTypeId}`)
    }
  })
});

export {FacilityTypeType};
    




const FacilityTypeInputType = new GraphQLInputObjectType({
  name: 'FacilityTypeInputType',
  description: 'input type for FacilityType',

  fields: () => ({
    description: {type: GraphQLString},
    facilityTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {FacilityTypeInputType};
    