
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

import {FacilityType} from '../product/Facility.js';


const FacilityAttributeType = new GraphQLObjectType({
  name: 'FacilityAttributeType',
  description: 'Type for FacilityAttribute in product',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityAttribute, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${facilityAttribute.facilityId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FacilityAttributeType};
    




const FacilityAttributeInputType = new GraphQLInputObjectType({
  name: 'FacilityAttributeInputType',
  description: 'input type for FacilityAttribute in product',

  fields: () => ({
    facilityId: {type: GraphQLString},
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {FacilityAttributeInputType};
    