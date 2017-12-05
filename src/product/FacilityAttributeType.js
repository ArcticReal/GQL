
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Facility} from '../product/Facility.js';


const FacilityAttribute = new GraphQLObjectType({
  name: 'FacilityAttributeType',
  description: 'Type for FacilityAttribute in product',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityAttribute, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {FacilityAttribute};
    