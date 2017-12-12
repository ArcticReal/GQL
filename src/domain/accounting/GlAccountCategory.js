
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

import {GlAccountCategoryTypeType} from '../accounting/GlAccountCategoryType.js';
import {GlAccountCategoryMemberType} from '../accounting/GlAccountCategoryMember.js';


const GlAccountCategoryType = new GraphQLObjectType({
  name: 'GlAccountCategoryType',
  description: 'Type for GlAccountCategory in accounting',

  fields: () => ({
    glAccountCategoryType: {
      type: GlAccountCategoryTypeType,
      args : {glAccountCategoryTypeId: {type: GraphQLString}},
      resolve: (glAccountCategory, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountCategoryTypes/find?glAccountCategoryTypeId=${glAccountCategory.glAccountCategoryTypeId}`)
    },
    glAccountCategoryId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccountCategoryMembers: {
      type: new GraphQLList(GlAccountCategoryMemberType),
      args : {},
      resolve: (glAccountCategory, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountCategoryMembers/find?glAccountCategoryId=${glAccountCategory.glAccountCategoryId}`)
    }
  })
});

export {GlAccountCategoryType};
    




const GlAccountCategoryInputType = new GraphQLInputObjectType({
  name: 'GlAccountCategoryInputType',
  description: 'input type for GlAccountCategory in accounting',

  fields: () => ({
    glAccountCategoryTypeId: {type: GraphQLString},
    glAccountCategoryId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {GlAccountCategoryInputType};
    