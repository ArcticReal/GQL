
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

import {FacilityTypeType} from '../../product/FacilityType/FacilityTypeType.js';


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
    