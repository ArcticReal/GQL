
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
    attrValue: {type: GraphQLInt},
    attrName: {type: GraphQLString}
  })
});

export {FacilityAttributeType};
    